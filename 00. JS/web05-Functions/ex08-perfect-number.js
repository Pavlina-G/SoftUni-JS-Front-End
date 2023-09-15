function perfectNum(n) {
    let nums = [];
    let isPerfect = false;
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
            nums.push(i);
        }
    }
    if (sum === n && n === (sum + n) / 2) {
        isPerfect = true;
    }
    let perfNums = nums.join(' + ')

    if (isPerfect) {
        console.log(`Perfect number!\n${perfNums}`);
    } else {
        console.log('It’s not so perfect.');
    }
}

perfectNum(6);
perfectNum(28);
perfectNum(1236498);