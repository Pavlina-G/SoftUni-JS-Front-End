// TODO
function attachEvents() {

    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const loadBtn = document.getElementById('load-button');
    const addBtn = document.getElementById('add-button');
    const itemInput = document.getElementById('title')

    const listItems = document.getElementById('todo-list')

    loadBtn.addEventListener('click', showAllItems)
    addBtn.addEventListener('click', addNewItem)

    // function showAllItems(event) {
    //     if (event) {
    //         event.preventDefault()
    //     }
    //
    //     listItems.innerHTML = ''
    //
    //     fetch(BASE_URL)
    //         .then((data) => data.json())
    //         .then((tasksRes) => {
    //             const tasks = Object.values(tasksRes)
    //             console.log(tasks)
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         })


    // }
    async function showAllItems(event) {
        if (event) {
            event.preventDefault()
        }

        listItems.innerHTML = ''

        try {
            const res = await fetch(BASE_URL)
            const resData = await res.json()

            let tasks = Object.values(resData)

            for (const {_id, name} of tasks) {
                let li = document.createElement('li')
                li.id = _id
                let span = document.createElement('span')
                span.textContent = name;

                let removeBtn = document.createElement('button')
                removeBtn.textContent = 'Remove'
                removeBtn.addEventListener('click', deleteItem)

                let editBtn = document.createElement('button')
                editBtn.textContent = 'Edit'
                editBtn.addEventListener('click', editItem)

                li.appendChild(span);
                li.appendChild(removeBtn);
                li.appendChild(editBtn);
                listItems.appendChild(li);
            }
        } catch (e) {

        }
    }

    async function addNewItem(event) {
        event.preventDefault();

        const name = itemInput.value;

        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({name})
        }

        try {
            await fetch(BASE_URL, httpHeaders);
            await showAllItems();
            itemInput.value = '';
        } catch (e) {
            alert(e)
        }


    }

    async function editItem(event) {
        event.preventDefault()
        const liElement = event.currentTarget.parentNode
        const [span, removeBtn, editBtn] = Array.from(liElement.children)

        const editInput = document.createElement('input')

        editInput.value = span.textContent
        span.remove()
        liElement.prepend(editInput)
        const name = editInput.value
        const submitBtn = document.createElement('button')
        submitBtn.textContent = 'Submit'
        liElement.appendChild(submitBtn)
        editBtn.remove()

        submitBtn.addEventListener('click', submitItem)
    }

    async function submitItem(e) {
        e.preventDefault()
        const parentLi = e.currentTarget.parentNode
        const id = parentLi.id
        const inputData = Array.from(parentLi.children)[0]

        const httpHeaders = {
            method: 'PATCH',
            body: JSON.stringify({name: inputData.value})
        }

        try {
            await fetch(BASE_URL + id, httpHeaders)
            await showAllItems()
        } catch (e) {
            alert(e)
        }
    }

    async function deleteItem(e) {
        const li = e.currentTarget.parentNode
        const id = li.id

        try {
            await fetch(BASE_URL + id, {method: 'DELETE'})
            await showAllItems()
        } catch (e) {
            alert(e)
        }
    }


}

attachEvents();
