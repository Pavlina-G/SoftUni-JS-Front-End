function printSum(a, b, c) {
    let sum = (a, b) => a + b;
    let substract = (abSum, c) => abSum - c;
    
    console.log(substract(sum(a, b), c));
}

printSum(23, 6, 10);
printSum(1, 17, 30);
printSum(42, 58, 100);
