function numberModification(number) {
    numArr = String(number).split('').map(num => Number(num));
    let sum = 0;

    let totalSum = (array) => {
        array.forEach((num) => {
            sum += num;
        })
        return sum;
    }
    let average = (array) => totalSum(array) / array.length;

    while (average(numArr) <= 5) {
        numArr.push(9);
        sum = 0;
    }
    console.log(numArr.join(''));
}

numberModification(101);
numberModification(5835);