function solve(num) {
    let same = Boolean(true);
    let sum = 0;
    let strNum = num.toString()

    for (let n of strNum) {
        if (n !== strNum.charAt(0)) {
            same = false;
        }
        sum += Number(n);
    }
    console.log(same);
    console.log(sum);
}

solve(2222222);
solve(1234);