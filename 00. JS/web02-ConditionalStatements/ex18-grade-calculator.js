function solve(percentage) {

    if (percentage < 60) {
        console.log('F');
    } else if (percentage < 70) {
        console.log('D');
    } else if (percentage < 80) {
        console.log('C');
    } else if (percentage < 90) {
        console.log('B');
    } else {
        console.log('A');
    }
}

solve(95);
solve(82);
solve(76);
solve(65);
solve(45);