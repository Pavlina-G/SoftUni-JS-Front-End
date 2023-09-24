function createMatrix(lines) {
    const mat = [];
    for (let l of lines) {
        mat.push(l.split(" ").map((n) => Number(n)));
    }
    return mat;
}

function chessboardChecker(mat = []) {
    const matrix = createMatrix(mat);
    let queenFound = false;
    function rowColValid(row, col) {
        return (0 <= row && row < matrix.length && 0 <= col && col < matrix[0].length)
    }

    function checkQueen(row, col) {
        const combinations = [
            [row, col - 1], //left
            [row, col + 1], //right
            [row - 1, col], //down
            [row + 1, col], //up
            [row - 1, col - 1], //left-up diagonal
            [row - 1, col + 1], //left-down diagonal
            [row + 1, col - 1], //right-up diagonal
            [row + 1, col + 1], //right-down diagonal
        ]
        if (rowColValid(row, col)) {
            for (let [r, c] of combinations) {
                if (rowColValid(r, c) && matrix[r][c] === 1) {
                    queenFound = true;
                    break
                }
            }
        }
    }

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] === 1) {
                checkQueen(r, c)
            }
        }
    }

    if (queenFound) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

chessboardChecker(["0 1 0 0", "0 0 0 1", "1 0 0 0", "0 0 1 0"]);
chessboardChecker(["0 1 0 0", "0 0 0 1", "1 0 0 0", "0 1 0 0"]);
chessboardChecker(["0 1 0 0", "0 0 0 0", "1 0 0 0", "0 0 0 0"]);
