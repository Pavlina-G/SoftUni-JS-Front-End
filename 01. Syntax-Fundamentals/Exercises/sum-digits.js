function sumDigits(num) {
    let sum = 0;
    for (let numKey of num.toString()) {
        sum += Number(numKey)
    }
    console.log(sum)
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);