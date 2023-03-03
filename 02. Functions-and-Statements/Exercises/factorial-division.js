function factorialDivision(num1, num2) {
    let factorial = (num) => {
        if (num < 0) {
            return -1;
        } else if (num === 0) {
            return 1;
        } else {
            return (num * factorial(num - 1));
        }
    }
    let result = factorial(num1) / factorial(num2)
    console.log(result.toFixed(2))
}

factorialDivision(5, 2);
factorialDivision(6, 2);