function createMatrix(lines) {
    const mat = [];
    for (let l of lines) {
        mat.push(l.split(" ").map((n) => Number(n)));
    }
    return mat;
}
// 123 -> 412
// 456 -> 753
// 789 -> 896

function matrixBorderFlip(mat = []) {
    const matrix = createMatrix(mat);
    let rows = matrix.length;
    let cols = matrix[0].length;

    let row=0, col=0;
    let prev, curr;

    while (row < rows && col < cols){
        if (row + 1 === rows || col + 1 ===cols){
            break;
        }

        prev = matrix[row+1][col]

        for (let i=col;i<cols;i++){
            curr = matrix[row][i]
            matrix[row][i] = prev;
            prev = curr;
        }
        row++;

        for(let i = row; i < rows; i++)
        {
            curr = matrix[i][cols - 1];
            matrix[i][cols - 1] = prev;
            prev = curr;
        }
        cols--;
        if (row < rows)
        {
            for(let i = cols - 1; i >= col; i--)
            {
                curr = matrix[rows - 1][i];
                matrix[rows - 1][i] = prev;
                prev = curr;
            }
        }
        rows--;
   
        // Move elements of first column
        // from the remaining rows
        if (col < cols)
        {
            for(let i = rows - 1; i >= row; i--)
            {
                curr = matrix[i][col];
                matrix[i][col] = prev;
                prev = curr;
            }
        }
        col++;
    }

    matrix.forEach(r=>console.log(r.join(' ')));
}

matrixBorderFlip(["1 2 3", "4 5 6", "7 8 9"]);
matrixBorderFlip(["0 1 0 0", "0 0 0 1", "1 0 0 0", "0 1 0 0"]);
