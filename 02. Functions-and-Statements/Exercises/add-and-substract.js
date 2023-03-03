function addAndSubstract(num1, num2, num3) {
    sum = () => num1 + num2
    substract = () => sum() - num3
    console.log(substract())
}

addAndSubstract(23,
    6,
    10
);
addAndSubstract(1,
    17,
    30
);
addAndSubstract(42,
    58,
    100
);
