function uniqueCodes(upper1, upper2, upper3) {

    function isPrime(n) {
        if (n <= 1)
            return false;

        for (let i = 2; i < n; i++)
            if (n % i == 0)
                return false;

        return true;
    }

    function isEven(n) {
        return n % 2 === 0;
    }

    for (let i = 1; i < upper1 + 1; i++) {
        for (let j = 1; j < upper2 + 1; j++) {
            for (let k = 1; k < upper3 + 1; k++) {
                if (isEven(i) && isEven(k) && isPrime(j)) {
                    console.log(i, j, k);
                }
                else {
                    continue
                }
            }
        }
    }

}

uniqueCodes(3, 5, 5);
uniqueCodes(6, 2, 6);