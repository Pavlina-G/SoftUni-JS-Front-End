window.addEventListener("load", solve);

function solve() {
    const titleInput = document.getElementById('task-title');
    const categoryInput = document.getElementById('task-category');
    const textareaInput = document.getElementById('task-content')

    const publishBtn = document.getElementById('publish-btn')



    publishBtn.addEventListener('click', addTaskForReview)
    const listTasksContainer = document.getElementById('review-list')
    const publishedList = document.getElementById('published-list')

    const tasksInfo = {}

    function clearInputs() {
        titleInput.value = ''
        categoryInput.value = ''
        textareaInput.value = ''
    }

    function addTaskForReview() {
        let title = titleInput.value
        let category = categoryInput.value
        let content = textareaInput.value

        if(title && category && content) {
            tasksInfo[title] = {title:title, category:category, content:content}

            const newLi = createNewElement('li', '', 'rpost', '', listTasksContainer)
            const newArticle = createNewElement('article', '', '', '', newLi)
            const newTitle = createNewElement('h4', title, '', '', newArticle)
            const newCategory = createNewElement('p', `Category: ${category}`, '', '', newArticle)
            const newContent = createNewElement('p', `Content: ${content}`, '', '', newArticle)
            const editBtn = createNewElement('button', 'Edit', ['action-btn', 'edit'], '', newLi)

            editBtn.addEventListener('click', (e) => {
                let parentLi = e.currentTarget.parentNode
                let childArt = Array.from(parentLi.children)[0]
                let [title, category, content] = Array.from(childArt.children)

                titleInput.value = title.textContent
                categoryInput.value = tasksInfo[title.textContent].category
                textareaInput.value = tasksInfo[title.textContent].content

                parentLi.remove()
            })

            const postBtn = createNewElement('button', 'Post', ['action-btn', 'post'], '', newLi)

            postBtn.addEventListener('click', postTask)

            clearInputs();

        }
    }

    function postTask(e) {
        let taskItem = e.currentTarget.parentNode
        let publishLi = createNewElement('li', '', 'rpost', '', publishedList)
        let [art, edit, post] = Array.from(taskItem.children)
        publishLi.appendChild(art)
        publishedList.appendChild(publishLi)

        edit.remove()
        post.remove()



        taskItem.remove()



    }
    function createNewElement(type, text, className, id, parent, attributes) {
        const newElement = document.createElement(type)
        if (type !== 'input' || type !== 'textarea') {
            newElement.textContent = text;
        } else {
            newElement.value = text;
        }

        if (className && typeof className !== 'string') {
            newElement.classList.add(...className)
        } else if (className && typeof className === 'string') {
            newElement.classList.add(className)
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