function getNumbersAndSum(startNum, endNum) {
    let list = [];
    let sum = 0;
    for (let i = startNum; i < endNum+1; i++) {
        list.push(i);
        sum += i;
    }
    console.log(list.join(' '))
    console.log(`Sum: ${sum}`)
}

getNumbersAndSum(5, 10);
getNumbersAndSum(0, 26);