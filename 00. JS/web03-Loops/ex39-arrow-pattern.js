function arrowPattern(n) {
    let pattern = '';

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            pattern += " ";
        }
        for (let k = 0; k < i; k++) {
            pattern += "* ";
        }
        pattern += "\n";
    }

    for (let i = 1; i < n; i++) {
        pattern += " ".repeat((n + 1) / 2)
        if (n % 2 === 0) {

            pattern += '*'.repeat(n - 1) + '\n'
        } else {

            pattern += '*'.repeat(n - 2) + '\n'
        }

    }



    console.log(pattern);
}

arrowPattern(7);
arrowPattern(3);
arrowPattern(4);
arrowPattern(6);