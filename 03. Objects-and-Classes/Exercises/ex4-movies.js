function movies(moviesList) {
    let movies = [];

    for (const movie of moviesList) {
        if (movie.includes('addMovie')) {
            addMovie = movie.slice('addMovie'.length + 1)
            movies.push({name: addMovie})

        } else if (movie.includes('directedBy')) {
            let index = movie.indexOf('directedBy');
            let movieName = movie.slice(0, index - 1);
            let director = movie.slice(index + 'directedBy'.length + 1);

            for (let movie of movies) {
                if (movieName === movie['name']) {
                    movie.director = director;
                }
            }
        }
        else if (movie.includes('onDate')) {
            let index = movie.indexOf('onDate');
            let movieName = movie.slice(0, index - 1);
            let date = movie.slice(index + 'onDate'.length + 1);

            for (let movie of movies) {
                if (movieName === movie['name']) {
                    movie.date = date;
                }
            }
        }

    }
    for (const movie of movies) {
        if (Object.keys(movie).length === 3) {
            console.log(JSON.stringify(movie))
        }
    }
}


movies([
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
);
movies([
        'addMovie The Avengers',
        'addMovie Superman',
        'The Avengers directedBy Anthony Russo',
        'The Avengers onDate 30.07.2010',
        'Captain America onDate 30.07.2010',
        'Captain America directedBy Joe Russo'
    ]
);