function sumEven(arr = []) {
    let sum = 0;
    let evenNums = arr
        .map((el) => Number(el))
        .filter((n) => n % 2 === 0);
    evenNums.forEach((n) => sum += n);
    console.log(sum);
}

sumEven(['1', '2', '3', '4', '5', '6']);
sumEven(['3', '5', '7', '9']);
sumEven(['2', '4', '6', '8', '10']);