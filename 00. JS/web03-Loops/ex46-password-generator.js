function solve(n, l) {
    let a = 97;
    let z = 122;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            for (var k = a; k < a + l; k++) {
                for (var m = a; m < a + l; m++) {
                    for (let r = Math.max(i, j) + 1; r <= n; r++) {
                        console.log(`${i}${j}${String.fromCharCode(k)}${String.fromCharCode(m)}${r}`);
                    }
                    console.log();
                }
            }
        }
    }
}

solve(2, 4);
solve(3, 1);