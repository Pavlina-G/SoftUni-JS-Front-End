function attachCoursePlanner() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
    const coursesList = document.getElementById('list')
    const loadCoursesBtn = document.getElementById('load-course')
    loadCoursesBtn.addEventListener('click', loadAllCourses)

    const addCoursesBtn = document.getElementById('add-course')

    addCoursesBtn.addEventListener('click', addNewCourse)
    const editCoursesBtn = document.getElementById('edit-course')


    const courseNameInput = document.getElementById('course-name')
    const courseTypeInput = document.getElementById('course-type')
    const courseTextareaInput = document.getElementById('description')
    const courseTeacherInput = document.getElementById('teacher-name')
    const allData = {}
    async function loadAllCourses(e) {
        if (e) {
            e.preventDefault()
        }
        coursesList.innerHTML = ''

        try {
            const res = await fetch(BASE_URL)
            const data = await res.json()
            let coursesData = Object.values(data)

            for (const course of coursesData) {
                let divCourse = document.createElement('div')
                divCourse.id = course._id
                divCourse.classList.add('container')

                let h2Title = document.createElement('h2')
                h2Title.textContent = course.title
                let h3Name = document.createElement('h3')
                h3Name.textContent = course.teacher
                let h3Type = document.createElement('h3')
                h3Type.textContent = course.type
                let h4Description = document.createElement('h4')
                h4Description.textContent = course.description

                allData[course.title] = {type: course.type, description: course.description, teacher: course.teacher, id: course._id}


                let editBtn = document.createElement('button')
                editBtn.textContent = 'Edit Course'
                editBtn.classList.add('edit-btn')
                editBtn.addEventListener('click', editCourseData)
                let finishBtn = document.createElement('button')
                finishBtn.textContent = 'Finish Course'
                finishBtn.classList.add('finish-btn')
                finishBtn.addEventListener('click', deleteCourse)

                divCourse.appendChild(h2Title)
                divCourse.appendChild(h3Name)
                divCourse.appendChild(h3Type)
                divCourse.appendChild(h4Description)
                divCourse.appendChild(editBtn)
                divCourse.appendChild(finishBtn)
                coursesList.appendChild(divCourse)

            }
        } catch (e) {

        }
    }

    async function addNewCourse(e) {
        e.preventDefault()
        const title = courseNameInput.value
        const type = courseTypeInput.value
        const teacher = courseTeacherInput.value
        const description = courseTextareaInput.value

        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({title, type, description, teacher})
        }
        try {
            await fetch(BASE_URL, httpHeaders)
            clearInputs();
            await loadAllCourses()

        } catch (e) {

        }
    }

    async function editCourseData(e) {
        e.preventDefault()
        try {
            let parentDiv = e.currentTarget.parentNode
            let id = parentDiv.id
            let courseTitle = Array.from(parentDiv.children)[0].textContent

            courseNameInput.value = courseTitle
            courseTypeInput.value = allData[courseTitle].type
            courseTextareaInput.value = allData[courseTitle].description
            courseTeacherInput.value = allData[courseTitle].teacher

            addCoursesBtn.disabled = true
            editCoursesBtn.disabled = false
            editCoursesBtn.addEventListener('click', async (e) => {
                e.preventDefault()

                const id = parentDiv.id

                let title = courseNameInput.value
                let type = courseTypeInput.value
                let teacher = courseTeacherInput.value
                let description = courseTextareaInput.value
                let _id = id

                const httpHeaders = {
                    method: 'PUT',
                    body: JSON.stringify({title, type, description, teacher, _id})
                }

                await fetch(BASE_URL + id, httpHeaders)
                clearInputs()
                await loadAllCourses()
                addCoursesBtn.disabled = false
                editCoursesBtn.disabled = true
            })
        } catch (e) {

        }
    }

    async function deleteCourse(e) {
        if (e) {
            e.preventDefault()
        }
        let parentDiv = e.currentTarget.parentNode
        let id = parentDiv.id

        await fetch(BASE_URL + id, {method: 'DELETE'})
        await loadAllCourses()

    }
    function clearInputs() {
        courseNameInput.value = ''
        courseTypeInput.value = ''
        courseTextareaInput.value = ''
        courseTeacherInput.value = ''
    }
}

attachCoursePlanner()