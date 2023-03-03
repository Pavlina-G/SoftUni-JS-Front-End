function formatGrade(number) {
    if (number < 3.00) {
        console.log(`Fail (2)`);
    } else if (number < 3.50) {
        console.log((`Poor (${number.toFixed(2)})`));
    } else if (number < 4.50) {
        console.log((`Good (${number.toFixed(2)})`));
    } else if (number < 5.50) {
        console.log((`Very good (${number.toFixed(2)})`));
    } else {
        console.log((`Excellent (${number.toFixed(2)})`));
    }
}

formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);