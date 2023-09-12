function specialNum(n) {
    function noRemainder(j, k) {
        if (j % k === 0) {
            return true;
        };
        return false;
    }

    for (let num = 1111; num <= 9999; num++) {
        let [a, b, c, d] = num.toString().split('')
        if (noRemainder(n, a) && noRemainder(n, b)
            && noRemainder(n, c) && noRemainder(n, d)) {
            console.log(num);
        }
    }
}

specialNum(3);