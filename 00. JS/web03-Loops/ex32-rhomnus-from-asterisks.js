function printRhomnus(n) {
    let pattern = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            pattern += " ";
        }
        for (let k = 0; k < i; k++) {
            pattern += "* ";
        }
        pattern += "\n";
    }
    for (let i = 1; i <= n - 1; i++) {
        for (let j = 0; j < i; j++) {
            pattern += " ";
        }
        for (let k = 0; k < n - i; k++) {
            pattern += "* ";
        }
        pattern += "\n";
    }
    console.log(pattern);
}


printRhomnus(1);
printRhomnus(2);
printRhomnus(3);
printRhomnus(4);