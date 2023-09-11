function printHalfRhombus(n) {
    let string = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            string += "* ";
        }
        string += "\n";
    }
    for (let i = 1; i <= n - 1; i++) {
        for (let j = 0; j < n - i; j++) {
            string += "* ";
        }
        string += "\n";
    }
    console.log(string);
}

printHalfRhombus(1);
printHalfRhombus(2);
printHalfRhombus(3);
printHalfRhombus(4);