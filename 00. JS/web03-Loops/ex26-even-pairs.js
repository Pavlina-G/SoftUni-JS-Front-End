function isPrime(n) {
    if (n <= 1)
        return false;

    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;

    return true;
}

function evenPairs(num1, num2, n1, n2) {

    for (let i = num1; i < num1 + n1 + 1; i++) {
        for (let j = num2; j < num2 + n2 + 1; j++) {
            if (isPrime(i) && isPrime(j)) {
                console.log(`${i}${j}`);
            }
        }
    }
}

evenPairs(10, 20, 5, 5);
evenPairs(10, 30, 9, 6);



// console.log(isPrime(31));