function sumRowsCols(line = []) {
    function createMatrix(lines) {
        let n = lines.length;
        const mat = [];
        for (let l of lines) {
            mat.push(l.split(" ").map((n) => Number(n)));
        }
        return mat;
    }

    const matrix = createMatrix(line);
    let rowSum = [];
    let colSum = [];
    for (let row of matrix) {
        rowSum.push(row.reduce((rowSum, n) => rowSum + n, 0));
    }
    let columns = matrix[0].length
    for (let c = 0; c < columns; c++) {
        let sum = 0;
        for (let r = 0; r < matrix.length; r++) {
            sum += matrix[r][c];
        }
        colSum.push(sum)
    }
    console.log(`Row Sums: ${rowSum.join(', ')}`);
    console.log(`Column Sums: ${colSum.join(', ')}`);
}

sumRowsCols(["1 2", "3 4", "5 6"]);
sumRowsCols(["1 2 3", "4 5 6", "7 8 9"]);
