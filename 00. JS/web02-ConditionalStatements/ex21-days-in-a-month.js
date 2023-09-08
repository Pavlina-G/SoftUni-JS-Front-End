function checkMonthDays(month) {
    let result;
    let days30 = [4, 6, 9, 11]

    if (month === 2) {
        result = 28;
    } else if (days30.includes(month)) {
        result = 30;
    } else {
        result = 31
    }
    console.log(result);
}

// take input
// const prompt = require("prompt-sync")();
// const month = prompt('Enter a month number:');

// checkMonthDays(month);

checkMonthDays(1);
checkMonthDays(2);
checkMonthDays(4);
checkMonthDays(7);

// Input Output
// 1 31
// 2 28
// 4 30
// 7 31