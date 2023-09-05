function calculateNumbers(num1, num2) {
    let sum = num1 + num2;
    let substract = Math.abs(num1 - num2);
    let product = num1 * num2;
    let average = (num1 + num2) / 2;

    console.log(`Sum: ${sum}`);
    console.log(`Difference: ${substract}`);
    console.log(`Product:: ${product}`);
    console.log(`Average:: ${average}`);
}

calculateNumbers(25, 5);
calculateNumbers(7, 14);
calculateNumbers(12, 1);