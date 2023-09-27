function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

function* genPrimeNumbers(n) {
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            yield i;
        }
    }
}

let primeNumbers = genPrimeNumbers(50);
for (let num of primeNumbers){
    console.log(num);
    // process.stdout.write(num + " ");  // NodeJs
}

