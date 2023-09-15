function oddEvenSum(n) {
    let evenSum = 0;
    let oddSum = 0;
    let num = n.toString();

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 != 0) {
            oddSum += Number(num[i]);
        } else {
            evenSum += Number(num[i]);
        }
    }
    let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    return result
}

console.log(oddEvenSum(1000435));
console.log(oddEvenSum(3495892137259234));