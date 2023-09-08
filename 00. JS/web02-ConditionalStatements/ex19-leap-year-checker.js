function checkYear(year) {

    if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
        console.log("It's a leap year!")
    } else {
        console.log("It's not a leap year.")
    }
}

checkYear(2020);
checkYear(1900);
checkYear(2000);
checkYear(2023);
checkYear(1600);