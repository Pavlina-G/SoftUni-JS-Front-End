// TODO:
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
    const loadBtn = document.getElementById('load-board-btn')
    loadBtn.addEventListener('click', loadAllTasks)

    const addTaskBtn = document.getElementById('create-task-btn')
    addTaskBtn.addEventListener('click', addNewTask)

    const taskTitleInput = document.getElementById('title');
    const taskDescriptionInput = document.getElementById('description');

    const todoList = document.querySelector('#todo-section > ul');
    const inProgressList = document.querySelector('#in-progress-section > ul');
    const codeReviewList = document.querySelector('#code-review-section > ul');
    const doneList = document.querySelector('#done-section > ul');


    const moveStatuses = {
        'Move to In Progress': 'In Progress',
        'Move to Code Review': 'Code Review',
        'Move to Done': 'Done'
    }

    // const tasksContainer = document.getElementById('board-section')

    async function loadAllTasks(event) {
        if (event) {
            event.preventDefault();
        }
        todoList.innerHTML = '';
        inProgressList.innerHTML = '';
        codeReviewList.innerHTML = '';
        doneList.innerHTML = '';

        try {
            const tasksRes = await fetch(BASE_URL)
            const tasksData = await tasksRes.json()
            let currentTasks = Object.values(tasksData)

            for (const {title, description, status, _id} of currentTasks) {
                createTask(title, description, status, _id)
            }

            let taskButtons = Array.from(document.querySelectorAll('#board-section button'))
            for (const taskButton of taskButtons) {
                taskButton.addEventListener('click', updateStatusTask)
            }
        } catch (e) {
        }
    }

    async function addNewTask() {
        let title = taskTitleInput.value
        let description = taskDescriptionInput.value
        let status = 'ToDo'

        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({title, description, status})
        }

        const newResp = await fetch(BASE_URL, httpHeaders)

        taskTitleInput.value = '';
        taskDescriptionInput.value = '';

        await loadAllTasks();
    }

    async function updateStatusTask(e) {
        const taskButton = e.currentTarget
        const taskId = taskButton.id

        const httpHeaders = {}
        try {

            if (taskButton.textContent === 'Close') {
                httpHeaders.method = 'DELETE'
            } else {
                let newStatus = moveStatuses[taskButton.textContent]
                httpHeaders.method = 'PATCH'
                httpHeaders.body = JSON.stringify({status: newStatus})
            }

            await fetch(`${BASE_URL}${taskId}`, httpHeaders)
            await loadAllTasks()
        } catch (e) {

        }
    }


    function createTask(title, description, status, id) {
        let taskParent;
        let updateStatus;
        if (status === "ToDo") {
            taskParent = todoList
            updateStatus = 'Move to In Progress'
        } else if (status === "In Progress") {
            taskParent = inProgressList
            updateStatus = 'Move to Code Review'
        } else if (status === "Code Review") {
            taskParent = codeReviewList
            updateStatus = 'Move to Done'
        } else if (status === "Done") {
            taskParent = doneList;
            updateStatus = 'Close'
        }

        let newTask = createNewElement('li', '', 'task', '', taskParent)
        let taskTitle = createNewElement('h3', title, '', '', newTask)
        let taskDescription = createNewElement('p', description, '', '', newTask)
        let taskButton = createNewElement('button', updateStatus, '', id, newTask)
        // taskButton.addEventListener('click', updateStatusTask)

    }

    function createNewElement(type, text, addClass, id, parent, attributes) {
        const newElement = document.createElement(type)
        if (type !== 'input' || type !== 'textarea') {
            newElement.textContent = text;
        } else {
            newElement.value = text;
        }

        if (addClass) {
            newElement.classList.add(addClass);
            // newElement.className = addClass;
            // newElement.classList.add(...['test2', 'test3'])
            // newElement.setAttribute('class', addClass)
        }

        if (id) {
            newElement.id = id;
        }
        if (parent) {
            parent.appendChild(newElement)
        }

        return newElement
    }
}

attachEvents();