function loadingBar(num) {
    let completeLen = 10;
    let numArray = String(num).split('')

    if (num === 100) {
        console.log(`${num}% Complete!`);
        console.log(`[${'%'.repeat(completeLen)}]`);
    } else {
        result = '%'.repeat(Number(numArray[0])) + '.'.repeat(completeLen - Number(numArray[0]));
        console.log(`${num}% [${result}]`);
        console.log('Still loading...');
    }
}

loadingBar(30)
loadingBar(50)
loadingBar(100)