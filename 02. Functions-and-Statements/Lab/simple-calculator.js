var simpleCalculator = (num1, num2, operator) => {
    let dict = {};
    dict['add'] = num1 + num2
    dict['subtract'] = num1 - num2
    dict['multiply'] = num1 * num2
    dict['divide'] = num1 / num2
    console.log(dict[operator])
}


(simpleCalculator(5,
    5,
    'multiply'
));
(simpleCalculator(40,
    8,
    'divide'
));
(simpleCalculator(12,
    19,
    'add'
));
(simpleCalculator(50,
    13,
    'subtract'
));