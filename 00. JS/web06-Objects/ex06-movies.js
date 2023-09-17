function moviesInfo(actions = []) {


    const movies = []

    for (let action of actions) {
        let movieObj = {
            name: '',
            date: '',
            director: '',
        }

        let name = '';
        let idx;

        if (action.startsWith('addMovie ')) {
            let firstSpaceIdx = action.indexOf(' ')
            name = action.slice([firstSpaceIdx + 1])
            movieObj.name = name;

            if (movies.length > 0) {
                movies.forEach((m) => {
                    if (!(Object.values(m).includes(name))) {
                        movies.push(movieObj);
                    }
                })
            } else {
                movies.push(movieObj);
            }

        } else if (action.includes(' directedBy ')) {
            idx = action.indexOf(' directedBy')
            name = action.slice(0, idx)
            movies.forEach((m) => {
                if (name === m.name) {
                    let director = action.slice(idx + ' directedBy '.length)
                    m.director = director;
                }
            })
        } else if (action.includes(' onDate ')) {
            idx = action.indexOf(' onDate')
            name = action.slice(0, idx)
            movies.forEach((m) => {
                if (name === m.name) {
                    let date = action.slice(idx + ' onDate '.length)
                    m.date = date;
                }
            })
        }
    }
    for (let m of movies) {
        if (m.name && m.date && m.director) {
            console.log(m);
        }
    }

}

moviesInfo([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    ' Spinderman 2 onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);
moviesInfo([
    'addMovie The Avengers',
    'addMovie Spiderman',
    'The Avengers directedBy Pesho Peshov',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo',
    'The Avengers directedBy Anthony Russo',
]
);