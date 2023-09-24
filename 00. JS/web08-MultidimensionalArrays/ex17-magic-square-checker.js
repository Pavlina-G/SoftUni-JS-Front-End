function createMatrix(lines) {
    const mat = [];
    for (let l of lines) {
        mat.push(l.split(" ").map((n) => Number(n)));
    }
    return mat;
}

function checkMatrix(mat = []) {
    const matrix = createMatrix(mat);
    const result = [];
    let columns = matrix[0].length
    let rowsSum = 0;

    let mainDiagSum = 0;
    let otherDiagSum = 0;

    for (let row of matrix) {
        result.push(row.reduce((sum, el) => sum + el, 0))
    }
    for (let c = 0; c < columns; c++) {
        let colsSum = 0;
        for (let r = 0; r < matrix.length; r++) {
            colsSum += matrix[r][c]
        }
        result.push(colsSum)
    }

    for (let r = 0; r < columns; r++) {
        let num = matrix[r][r]
        mainDiagSum += num;
    }
    result.push(mainDiagSum);

    let col = 0;
    for (let r = columns - 1; r >= 0; r--) {
        let num = matrix[r][col];
        col += 1
        otherDiagSum += num;
    }
    result.push(otherDiagSum)
    console.log(result.every(el => el === result[0]));

}

checkMatrix(["1 2 3", "4 5 6", "7 8 9"]);
checkMatrix(["1 0 0 0", "0 0 0 1", "0 1 0 0", "0 0 1 0"]);
checkMatrix(["8 1 6", "3 5 7", "4 9 2"]);
