function factorialDivision(n, m) {
    function factorialNum(num) {
        if (num < 0) {
            return -1;
        } else if (num == 0) {
            return 1;
        } else {
            return (num * factorialNum(num - 1));
        }
    }
    let result = factorialNum(n) / factorialNum(m)
    console.log(result.toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);