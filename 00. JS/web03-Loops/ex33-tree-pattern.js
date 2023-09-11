function printTree(n) {
    if (n === 1) return console.log("*");
    // tree
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
    }

    console.log(" ".repeat(n-1) + "*")
}

printTree(6);
printTree(4);
printTree(3);
printTree(2);
printTree(1);