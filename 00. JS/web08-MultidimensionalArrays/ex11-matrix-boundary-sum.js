function createMatrix(lines) {
    let n = lines.length;
    const mat = [];
    for (let l of lines) {
        mat.push(l.split(" ").map((n) => Number(n)));
    }
    return mat;
}

function sumBoundaryEl(mat = []) {
    const matrix = createMatrix(mat);
    let sum = 0;

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (r === 0 || r === matrix.length - 1) {
                sum += matrix[r][c];
            } else if (c === 0 || c === matrix[r].length - 1) {
                sum += matrix[r][c];
            }
        }
    }
    console.log(sum);
}

sumBoundaryEl(["1 2 3",
    "4 5 6",
    "7 8 9"]);
sumBoundaryEl(["1 2 3 0",
    "4 5 6 7",
    "0 8 9 1"]);