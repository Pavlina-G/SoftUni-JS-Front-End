function showHigherNum(num1, num2) {
    let result;
    if (num1 > num2) {
        result = num1;
    } else if (num2 > num1) {
        result = num2;
    } else {
        result = 'The numbers are equal'
    }

    console.log(result);
}

showHigherNum(6,8);
showHigherNum(5,3);
showHigherNum(7,7);
showHigherNum(2,4);
showHigherNum(7,12);
showHigherNum(-1,-5);