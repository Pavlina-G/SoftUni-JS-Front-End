function factorial(n) {
    let result = 1;
    for (i = 1; i < n + 1; i++) {
        result *= i
    }
    console.log(result);
}

factorial(5);
factorial(3);
factorial(0);
factorial(1);
factorial(10);