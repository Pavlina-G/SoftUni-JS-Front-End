function oddAndEvenSum(num) {
    let numArray = String(num).split('').map(num => {
        return Number(num);
    });
    let evenSum = 0;
    let oddSum = 0;

    for (const num of numArray) {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);