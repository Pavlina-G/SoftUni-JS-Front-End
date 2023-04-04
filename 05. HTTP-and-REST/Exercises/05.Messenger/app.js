function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger'
    const sendBtn = document.getElementById('submit')
    const refreshBtn = document.getElementById('refresh')
    const textarea = document.getElementById('messages')
    const inputName = document.querySelector('input[name="author"]')
    const inputMessage = document.querySelector('input[name="content"]')

    sendBtn.addEventListener('click', async ()=>{
        const headersPost = {
            method: 'POST',
            body: JSON.stringify({
                "author": inputName.value,
                "content": inputMessage.value
            })
        }
        try {
            const postComment = await fetch(BASE_URL, headersPost)
            inputName.value = '';
            inputMessage.value = ''
        } catch (e) {

        }
    })
    refreshBtn.addEventListener('click', showData)

    async function showData() {
        try {
            const res = await fetch(BASE_URL)
            const data = await res.json()
            const allComments = Object.values(data)
            textarea.disabled = false;
            textarea.value = '';
            let allData = []

            allComments.forEach((c)=> {
                let author = c.author;
                let content = c.content;
                allData.push(`${author}: ${content}`)
                textarea.value = allData.join('\n')
            })
        } catch (e) {

        }
    }
}

attachEvents();