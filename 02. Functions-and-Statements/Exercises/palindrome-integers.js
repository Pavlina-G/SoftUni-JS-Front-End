function palindromeIntegers(list) {
    let reversedNum = Number
    for (var num of list) {
        reversedNum = Number(String(num).split('').reverse().join(''))
        if (num === reversedNum) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);