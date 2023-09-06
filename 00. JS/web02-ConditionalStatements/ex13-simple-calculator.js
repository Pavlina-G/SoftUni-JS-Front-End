function calc(num1, num2, operator) {
    calculator = {
        "add": num1 + num2,
        "subtract": num1 - num2,
        "multiply": num1 * num2,
        "divide": num1 / num2,
    }


    if (operator === "divide" && num2 === 0) {
        console.log("Error");
    } else {
        let result = calculator[operator]
        console.log(result.toFixed(2));
    }
    
    
}

calc(5, 5, "add");
calc(10, 12, "subtract");
calc(9, 3, "divide");
calc(5, 2, "divide") ;
calc(5, 0, "divide") ;
calc(3.1, 0.1, "multiply");