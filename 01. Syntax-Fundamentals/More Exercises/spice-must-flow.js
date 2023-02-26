function spiceFlow(startNum) {
    let days = 0;
    let startSpices = startNum;
    let totalSpices = 0
    let workersConsume = 26;

    while (startNum >= 100) {
        startNum -= 10;
        dailySpices = startSpices - workersConsume;
        totalSpices += dailySpices;
        startSpices = startNum;
        days += 1;
    }
    if (startNum < 100 && startNum > 0) {
        totalSpices -= workersConsume;
        if (totalSpices < 0) {
            totalSpices = 0;
        }
    } else if (startNum === 0) {
        totalSpices = 0;
    }
    return `${days}\n${totalSpices}`
}

console.log(spiceFlow(111));
console.log(spiceFlow(450));
console.log(spiceFlow(0));
console.log(spiceFlow(30));