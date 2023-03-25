function comments(info) {
    let users = [];
    let articles = [];
    let comments = {};

    for (const line of info) {
        if (line.split(' ')[0] === 'user') {
            let username = line.split(' ')[1];
            users.push(username);
        } else if (line.startsWith('article')) {
            let artName = line.slice(line.indexOf('article') + 'article'.length + 1);
            articles.push(artName);
        } else {
            let commentList = line.split(' ');
            let user = commentList.shift();
            commentList.shift();
            commentList.shift();
            let [artName, titleContent] = commentList.join(' ').split(': ');

            let [title, content] = titleContent.split(', ');

            if (users.includes(user) && articles.includes(artName)) {

                if (!(artName in comments)) {
                    comments[artName] = [];
                }
                comments[artName].push({user: user, title: title, content: content});

            }

        }
    }
    let sorted = Object.entries(comments).sort((a, b) => b[1].length - a[1].length);

    for (const article of sorted) {
        console.log(`Comments on ${article[0]}`);

        article[1].sort((a, b) => {
            return a.user.localeCompare(b.user)
        }).forEach(
            (el) => {
                console.log(
                    `--- From user ${el.user}: ${el.title} - ${el.content}`
                )
            }
        )
    }

}

comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']);
// comments();