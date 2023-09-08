function getMoviePriceByAge(age) {
    let price;

    if (age < 13) {
        price = 5;
    } else if (age < 20) {
        price = 8;
    } else {
        price = 10;
    }

    console.log(`$${price}`);    
}

getMoviePriceByAge(10);
getMoviePriceByAge(16);
getMoviePriceByAge(25);
getMoviePriceByAge(13);