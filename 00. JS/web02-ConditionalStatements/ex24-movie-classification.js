function showMoviesByAge(age){
    let result;
    if (age < 13) {
        result = 'U-rated movies';
    } else if (age < 18) {
        result = 'U and PG-13 rated movies';
    } else {
        result = 'All movies';
    }
    console.log(result);
}

showMoviesByAge(10);
showMoviesByAge(16);
showMoviesByAge(21);