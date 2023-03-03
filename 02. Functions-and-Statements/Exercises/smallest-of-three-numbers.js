function printTheSmallestNum(...numbers) {
    numbers.sort((a, b) => a- b)
    console.log(numbers.shift())
}

printTheSmallestNum(2,
    5,
    3
);
printTheSmallestNum(600,
    342,
    123
);
printTheSmallestNum(25,
    21,
    4
);
printTheSmallestNum(2,
    2,
    2
);