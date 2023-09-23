function sumDiagonals(line = []) {
    let n = line.length;
    const matrix = [];
    for (let l of line) {
        matrix.push(l.split(' ').map(n => Number(n)))
    }

    let sum = 0;

    for (let r = 0; r < n; r++) {
        let num = matrix[r][r]
        sum += num;
    }
    let col = 0;
    for (let r = n - 1; r >= 0; r--) {
        let num = matrix[r][col];
        col += 1
        sum += num;
    }
    console.log(sum);

}

sumDiagonals(["1 2 3",
    "4 5 6",
    "7 8 9"]);
sumDiagonals(["10 11",
    "14 15"]);