window.addEventListener('load', solve);

function solve() {
    const createTaskBtn = document.getElementById('create-task-btn');
    const deleteTaskBtn = document.getElementById('delete-task-btn');
    const tasksSection = document.getElementById('tasks-section');
    const totalPointsP = document.getElementById('total-sprint-points');

    let totalPoints = 0;

    const titleInput = document.getElementById('title');
    const descriptionTextarea = document.getElementById('description');
    const selectLabel = document.getElementById('label');
    const taskIdInput = document.getElementById('task-id');
    const pointsInput = document.getElementById('points');
    const taskAssigneeInput = document.getElementById('assignee');

    createTaskBtn.addEventListener('click', createNewTask)

    let taskNumber = 1
    let tasksData = {}


    function clearInputs() {
        taskIdInput.value = '';
        titleInput.value = '';
        titleInput.disabled = false;
        descriptionTextarea.value = '';
        descriptionTextarea.disabled = false;
        pointsInput.value = '';
        pointsInput.disabled = false;
        taskAssigneeInput.value = '';
        taskAssigneeInput.disabled = false;
        selectLabel.value = '';
        selectLabel.disabled = false;
        createTaskBtn.disabled = false;
        deleteTaskBtn.disabled = true;
    }

    function createNewTask() {

        if (titleInput.value && descriptionTextarea.value && pointsInput.value && taskAssigneeInput.value) {

            totalPoints += Number(pointsInput.value);

            totalPointsP.textContent = `Total Points ${totalPoints}pts`;

            const newArticle = document.createElement('article');
            newArticle.id = 'task-' + taskNumber;
            taskIdInput.value = newArticle.id;
            tasksData[newArticle.id] = {};
            taskNumber += 1;

            newArticle.setAttribute('class', 'task-card')

            let selectedOption = selectLabel.value
            let divLabel = document.createElement('div')
            divLabel.setAttribute('class', 'task-card-label')

            if (selectedOption === 'Feature') {
                divLabel.innerHTML = `${selectedOption} &#8865;`;
            } else if (selectedOption === 'High Priority Bug') {
                divLabel.innerHTML = `${selectedOption} &#9888;`;
            } else {
                divLabel.innerHTML = `${selectedOption} &#9737;`;
            }

            tasksData[newArticle.id].divLabel = selectedOption;
            if (divLabel.textContent.includes('Feature')) {
                divLabel.classList.add('feature');
            } else if (divLabel.textContent.includes('High Priority Bug')) {
                divLabel.classList.add('high-priority');
            } else {
                divLabel.classList.add('low-priority');
            }

            newArticle.appendChild(divLabel);

            let divTitle = document.createElement('h3');
            divTitle.setAttribute('class', 'task-card-title');
            divTitle.textContent = titleInput.value;
            tasksData[newArticle.id].divTitle = divTitle.textContent;

            newArticle.appendChild(divTitle);

            let divPar = document.createElement('p');
            divPar.setAttribute('class', 'task-card-description');
            divPar.textContent = descriptionTextarea.value;
            tasksData[newArticle.id].divPar = divPar.textContent;

            newArticle.appendChild(divPar);

            let divPoints = document.createElement('div');
            divPoints.setAttribute('class', 'task-card-points');
            divPoints.textContent = `Estimated at ${pointsInput.value} pts`;
            tasksData[newArticle.id].divPoints = pointsInput.value;

            newArticle.appendChild(divPoints);

            let divAssignee = document.createElement('div');
            divAssignee.setAttribute('class', 'task-card-assignee');
            divAssignee.textContent = `Assigned to: ${taskAssigneeInput.value}`;
            tasksData[newArticle.id].divAssignee = taskAssigneeInput.value;
            newArticle.appendChild(divAssignee);

            let divActions = document.createElement('div');
            divActions.setAttribute('class', 'task-card-actions');
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';

            deleteBtn.addEventListener('click', (e) => {
                let id = newArticle.id;
                deleteTaskBtn.disabled = false;
                createTaskBtn.disabled = true;
                deleteTaskBtn.addEventListener('click', () => {
                    newArticle.remove();
                    totalPoints -= pointsInput.value;
                    totalPointsP.textContent = `Total Points ${totalPoints}pts`;
                    clearInputs();
                })

                let taskInfo = tasksData[id];

                taskIdInput.value = id;
                titleInput.value = taskInfo.divTitle;
                titleInput.disabled = true;
                descriptionTextarea.value = taskInfo.divPar;
                descriptionTextarea.disabled = true;
                pointsInput.value = taskInfo.divPoints;
                pointsInput.disabled = true;
                taskAssigneeInput.value = taskInfo.divAssignee;
                taskAssigneeInput.disabled = true;
                selectLabel.value = taskInfo.divLabel;
                selectLabel.disabled = true;
                createTaskBtn.disabled = true;
                deleteTaskBtn.disabled = false;

            })
            divActions.appendChild(deleteBtn);

            newArticle.appendChild(divActions);
            tasksSection.appendChild(newArticle);

            clearInputs();

        }

    }
}