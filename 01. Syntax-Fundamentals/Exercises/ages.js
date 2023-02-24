function age(number) {
    if (number >= 0 && number <= 2) {
        return 'baby';
    } else if (2 < number && number <= 13) {
        return 'child';
    } else if (13 < number && number <= 19) {
        return 'teenager';
    } else if (19 < number && number <= 65) {
        return 'adult';
    } else if (65 < number && number >= 66) {
        return 'elder';
    } else {
        return 'out of bounds';
    }
}


console.log(age(3))
console.log(age(-1))
console.log(age(0))
console.log(age(100))