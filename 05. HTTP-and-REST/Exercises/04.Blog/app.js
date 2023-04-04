function attachEvents() {
    const POSTS_URL = 'http://localhost:3030/jsonstore/blog/posts';
    const COMMENTS_URL = 'http://localhost:3030/jsonstore/blog/comments';

    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const selectPosts = document.getElementById('posts');
    const btnViewPosts = document.getElementById('btnViewPost');
    const h1PostTitle = document.getElementById('post-title');
    const pPostBody = document.getElementById('post-body');
    const ulComments = document.getElementById('post-comments')


    const postsInfo = {}
    btnViewPosts.addEventListener('click', getPostInfo)

    async function getPostInfo() {

        let index = selectPosts.selectedIndex
        let selectedOptionId = selectPosts.options[index].value
        let selectedOptionText = selectPosts.options[index].text

        try {
            const response = await fetch(COMMENTS_URL)
            const commentsData = await response.json()

            const commentsValues = Object.values(commentsData)
            ulComments.innerHTML = '';
            commentsValues.filter((a) => a.postId === selectedOptionId)
                .forEach((el) => {
                    const liComment = document.createElement('li')
                    liComment.textContent = el.text
                    ulComments.appendChild(liComment)
                })

            const {body, title} = postsInfo[selectedOptionId]

            h1PostTitle.textContent = title
            pPostBody.textContent = body


        } catch (e) {

        }
    }


    btnLoadPosts.addEventListener('click', async () => {
        try {
            const res = await fetch(POSTS_URL);
            const resData = await res.json();
            for (const key in resData) {
                const {body, id, title} = resData[key];
                postsInfo[id] = {body: body, title: title}
                const option = document.createElement('option')
                option.value = id;
                option.innerHTML = title
                selectPosts.appendChild(option)

            }


        } catch (e) {

        }
    })
}

attachEvents();