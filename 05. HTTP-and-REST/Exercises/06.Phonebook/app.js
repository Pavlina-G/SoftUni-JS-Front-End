function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook/';

    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const contactsList = document.getElementById('phonebook');
    let allContacts = {}

    loadBtn.addEventListener('click', getAllContacts)

    async function getAllContacts() {
        contactsList.innerHTML = '';
        try {
            const res = await fetch(BASE_URL)
            const contactsData = await res.json()
            for (const key in contactsData) {
                const {_id, person, phone} = contactsData[key]
                allContacts[_id] = {person:person, phone:phone}

                const li = document.createElement('li')
                const deleteBtn = document.createElement('button')
                deleteBtn.setAttribute('class', 'button')
                deleteBtn.textContent = 'Delete'
                deleteBtn.id = _id
                deleteBtn.addEventListener('click', deleteContact)
                li.textContent = `${person}: ${phone}`
                li.appendChild(deleteBtn)
                contactsList.appendChild(li)
            }
        } catch (e) {

        }
    }

    createBtn.addEventListener('click', async ()=> {
        const personName = personInput.value
        const phoneNum = phoneInput.value
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                person: personName,
                phone: phoneNum
            })
        }
        try {
            const postContact = await fetch(BASE_URL, httpHeaders)
            personInput.value = '';
            phoneInput.value = '';
            await getAllContacts();
        } catch (e) {

        }
    })

    async function deleteContact(event) {
        const btnId = event.currentTarget.id
        const httpHeaders = {
            method: 'DELETE'
        }
        try {
            const deleteContact = await fetch(`${BASE_URL}${btnId}`, httpHeaders)
            await getAllContacts()

        } catch (e) {

        }
    }
}

attachEvents();