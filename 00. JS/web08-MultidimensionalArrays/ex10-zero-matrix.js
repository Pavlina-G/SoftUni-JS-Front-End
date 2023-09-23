function createMatrix(lines) {
    let n = lines.length;
    const mat = [];
    for (let l of lines) {
        mat.push(l.split(" ").map((n) => Number(n)));
    }
    return mat;
}

function zeroMatrix(mat) {
    const matrix = createMatrix(mat)
    let rowsCols = [];

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] === 0) {
                rowsCols.push([r, c])
            }
        }
    }
    for (let [row, col] of rowsCols) {
        let newRow = matrix[row].map((el) => el = 0);
        matrix[row] = newRow;
        for (let r = 0; r < matrix.length; r++) {
            matrix[r][col] = 0;
        }
    }
    matrix.forEach(r=>console.log(r.join(' ')))
}

zeroMatrix(["1 2 3", "4 0 6", "7 8 9"]);
zeroMatrix(["1 2 3 0", "4 5 6 7", "0 8 9 1"]);
