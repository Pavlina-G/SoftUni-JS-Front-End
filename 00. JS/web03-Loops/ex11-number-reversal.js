function printReversedNum(n) {
    let num = n.toString()
    let reversedNum = '';

    for (let i = num.length - 1; i > -1; i--) {
        reversedNum += num[i]
    }

    console.log(reversedNum);

    // console.log(num.split("").reverse().join("")); 
}

printReversedNum(123);
printReversedNum(9876);
printReversedNum(505);
printReversedNum(30201);
printReversedNum(7);