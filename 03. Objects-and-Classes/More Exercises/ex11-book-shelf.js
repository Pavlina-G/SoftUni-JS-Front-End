function bookShelf(list) {
    let shelves = {};


    for (const line of list) {
        if (line.includes('->')) {
            let [id, genre] = line.split(' -> ');
            if (!(id in shelves)) {
                shelves[id] = {};
                shelves[id][genre] = [];
                shelves[id]['count'] = 0;
            }
        } else {
            let [title, bookInfo] = line.split(': ');
            let [author, bookGenre] = bookInfo.split(', ');

            for (const key in shelves) {
                if (bookGenre in shelves[key]) {
                    shelves[key][bookGenre].push({title: title, author: author});
                    shelves[key]['count'] += 1;
                }
            }
        }
    }

    let sorted = Object.entries(shelves).sort((a, b) => {
        return b[1].count - a[1].count;
    })
    for (const id of sorted) {
        let genre = Object.keys(id[1])[0];
        let book = id[1][genre];

        console.log(`${id[0]} ${genre}: ${id[1].count}`)

        book.sort((a, b) => {
            return a.title.localeCompare(b.title);
        }).forEach(
            (item) => console.log(`--> ${item.title}: ${item.author}`)
        )

    }
}

// bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history']);
bookShelf(['1 -> mystery', '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi']
);