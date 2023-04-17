function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';
    const loadBtn = document.getElementById('loadBooks');
    const tableBooks = document.querySelector('table > tbody')
    const allBooksData = {}

    loadBtn.addEventListener('click', loadAllBooks)
    const bookInputs = Array.from(document.querySelectorAll('#form > input'))
    const [titleInput, authorInput] = bookInputs
    const submitBtn = document.querySelector('#form > button')

    const headerForm = document.querySelector('#form > h3')
    let bookId = null


    submitBtn.addEventListener('click', createBookData)


    async function loadAllBooks() {
        tableBooks.innerHTML = ''

        try {
            const bookRes = await fetch(BASE_URL)
            const booksData = await bookRes.json()

            for (const key in booksData) {
                let title = booksData[key].title
                let author = booksData[key].author

                allBooksData[key] = {title, author}

                let row = document.createElement('tr')
                let colTitle = document.createElement('td')
                colTitle.textContent = title
                let colAuthor = document.createElement('td')
                colAuthor.textContent = author
                row.appendChild(colTitle)
                row.appendChild(colAuthor)

                let colButtons = document.createElement('td')
                let editBtn = document.createElement('button')
                editBtn.textContent = 'Edit'

                editBtn.addEventListener('click', () => {
                        bookId = key;
                        headerForm.textContent = 'Edit FORM'
                        titleInput.value = title;
                        authorInput.value = author;
                        submitBtn.textContent = 'Save'
                    }
                )

                const deleteBtn = document.createElement('button')
                deleteBtn.textContent = 'Delete'
                deleteBtn.id = key
                deleteBtn.addEventListener('click', deleteBook)
                colButtons.appendChild(editBtn)
                colButtons.appendChild(deleteBtn)
                row.appendChild(colButtons)

                tableBooks.appendChild(row)
            }

        } catch (e) {
        }
    }

    async function createBookData() {
        let url = BASE_URL;
        const title = titleInput.value
        const author = authorInput.value

        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({title, author})
        }
        if (headerForm.textContent === 'Edit FORM') {
            httpHeaders.method = 'PUT';
            url += bookId

        }

        try {
            if (bookInputs.some((b) => !b.value)) {
                throw new Error('No Input Data')
            }

            const resData = await fetch(url, httpHeaders)
            await loadAllBooks()

            if (headerForm.textContent === 'Edit FORM') {
                headerForm.textContent = 'FORM'
                submitBtn.textContent = 'Submit'
            }


            titleInput.value = ''
            authorInput.value = ''


        } catch (e) {
            alert(e)
        }
    }

    async function deleteBook(e) {
        const id = e.currentTarget.id
        const httpHeaders = {
            method: 'DELETE'
        }
        await fetch(BASE_URL + id, httpHeaders)
        await loadAllBooks()
    }


}

attachEvents();