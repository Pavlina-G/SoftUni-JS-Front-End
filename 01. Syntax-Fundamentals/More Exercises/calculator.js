function calculator(num1, operator, num2) {
    let result = 0;
    switch (operator) {
        case '+': {
            result = num1 + num2;
            break;
        }
        case '-': {
            result = num1 - num2;
            break;
        }
        case '/': {
            result = num1 / num2;
            break;
        }
        case '*': {
            result = num1 * num2;
            break;
        }
    }
    return result.toFixed(2)
}

console.log(calculator(5,
    '+',
    10
));
console.log(calculator(25.5,
    '-',
    3
));