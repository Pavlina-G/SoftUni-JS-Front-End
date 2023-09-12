function printNums(firstN, secondN) {

    let matchingNums = [];

    for (let i = firstN; i <= secondN; i++) {
        let number = i.toString()
        let evenSum = 0;
        let oddSum = 0;

        for (let j = 0; j < 6; j += 2) {
            oddSum += Number(number[j]);
            evenSum += Number(number[j + 1]);
        }
        if (oddSum === evenSum) {
            matchingNums.push(i);
        }
    }
    if (matchingNums.length > 0) {
        matchingNums.forEach(num => {
            console.log(num);
        });
    } else {
        console.log('None');
    }



}


printNums(100000, 100050);
printNums(299900, 300000);
printNums(100115, 100120);