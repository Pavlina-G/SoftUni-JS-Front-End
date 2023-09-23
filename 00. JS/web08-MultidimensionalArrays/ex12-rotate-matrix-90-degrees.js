function createMatrix(lines) {
    let n = lines.length;
    const mat = [];
    for (let l of lines) {
        mat.push(l.split(" ").map((n) => Number(n)));
    }
    return mat;
}

function rotateMat(mat = []) {
    const matrix = createMatrix(mat);

    let columns = matrix[0].length
    let rows = matrix.length

    // Creating new 90-degree Matrix

    const newMatrix = Array(rows)
        .fill().map(() => Array(columns).fill(0));

    // Fill the new Matrix

    let row = 0;
    for (let c = columns - 1; c >= 0; c--) {

        let col = 0;
        for (let r = 0; r < rows; r++) {
            newMatrix[r][c] = matrix[row][col];
            col += 1;
        }
        row += 1;
    }
    newMatrix.forEach(r => console.log(r.join(' ')))


}

rotateMat(["1 2 3", "4 5 6", "7 8 9"]);
rotateMat(["0 1 2 3", "4 5 6 7", "8 9 10 11", "12 13 14 15"]);
