function substractEvenOdd(arr = []) {
    let evenSum = 0;
    let oddSum = 0;

    arr.forEach((el) => el % 2 === 0
        ? evenSum += el
        : oddSum += el)

    console.log(evenSum-oddSum);
}

substractEvenOdd([1, 2, 3, 4, 5, 6]);
substractEvenOdd([3, 5, 7, 9]);
substractEvenOdd([2, 4, 6, 8, 10]);