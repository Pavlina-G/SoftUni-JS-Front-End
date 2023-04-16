function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';
    window.addEventListener('load', getAllStudents)
    const submitBth = document.getElementById('submit');

    const firstNameInput = document.querySelector('input[name="firstName"]')
    const lastNameInput = document.querySelector('input[name="lastName"]')
    const facultyNumberInput = document.querySelector('input[name="facultyNumber"]')
    const gradeInput = document.querySelector('input[name="grade"]')
    const tBody = document.querySelector('tbody')
    const studentsInfo = {}

    submitBth.addEventListener("click", createStudent)

    async function createStudent() {

        let inputs = Array.from(document.querySelector(".inputs").children);
        let empty = inputs.filter((e) => !e.value);


        try {
            if (empty.length > 0) {
                throw new Error("Empty inputs");
            }

            const httpHeaders = {
                method: 'POST',
                body: JSON.stringify(
                    {
                        firstName: firstNameInput.value,
                        lastName: lastNameInput.value,
                        facultyNumber: facultyNumberInput.value,
                        grade: gradeInput.value
                    }
                )
            }

            const postStudent = await fetch(BASE_URL, httpHeaders)
            firstNameInput.value = '';
            lastNameInput.value = '';
            facultyNumberInput.value = '';
            gradeInput.value = '';



        } catch (e) {
            alert(e)
        }

    }

    async function getAllStudents() {
        try {
            const getRes = await fetch(BASE_URL)
            const data = await getRes.json()
            // const studentsData = Object.values(data)
            tBody.innerHTML = ''

            for (const dataKey in data) {
                const row = document.createElement('tr');


                let colFName = document.createElement('td')
                colFName.textContent = data[dataKey].firstName
                let colLName = document.createElement('td')
                colLName.textContent = data[dataKey].lastName
                let facNum = document.createElement('td')
                facNum.textContent = data[dataKey].facultyNumber
                let stGrade = document.createElement('td')
                stGrade.textContent = data[dataKey].grade

                row.appendChild(colFName)
                row.appendChild(colLName)
                row.appendChild(facNum)
                row.appendChild(stGrade)
                tBody.appendChild(row);

            }


        } catch (e) {

        }
    }
}

attachEvents();