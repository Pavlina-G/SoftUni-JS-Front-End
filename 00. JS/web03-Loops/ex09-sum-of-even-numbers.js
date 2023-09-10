function sumEven(n) {
    let sum = 0;
    let endNum = (n * 2) + 1;

    for (i = 1; i < endNum ; i ++) {
        if (i % 2 === 0) {
            sum += i;
        }
        
    }
    console.log(sum);
}

sumEven(3);
sumEven(5);
sumEven(1);
sumEven(0);
sumEven(10);