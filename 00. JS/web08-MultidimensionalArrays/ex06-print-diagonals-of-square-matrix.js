function printDiagonals(line = []) {
    let n = line.length;
    const matrix = []
    for (let l of line) {
        matrix.push(l.split(' ').map(n => Number(n)))
    }

    let firstDiagonal = [];
    let secondDiagonal = [];

    for (let r = 0; r < n; r++) {
        let num = matrix[r][r]
        firstDiagonal.push(num);
    }
    let col = 0;
    for (let r = n - 1; r >= 0; r--) {
        let num = matrix[r][col];
        col += 1
        secondDiagonal.push(num);
    }
    console.log(firstDiagonal.join(' '));
    console.log(secondDiagonal.join(' '));

}

printDiagonals(["1 2 3", "1 2 3", "1 2 3"]);
printDiagonals(["1 2 3 2", "1 1 2 4", "1 2 1 4", "2 2 3 1"]);
