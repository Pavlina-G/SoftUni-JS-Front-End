function createMatrix(lines) {
    const mat = [];
    for (let l of lines) {
        mat.push(l.split(" ").map((n) => Number(n)));
    }
    return mat;
}

function checkerboardPattern(n) {
    const matrix = Array(n)
        .fill().map(() => Array(n).fill(0));
    for (let r = 0; r < matrix.length; r++) {
        if (r % 2 === 0) {
            for (let c = 1; c < matrix[r].length; c+=2){
                matrix[r][c] = 1;
            }
        } else {
            for (let c = 0; c < matrix[r].length; c+=2){
                matrix[r][c] = 1;
            }
        }

    }
    matrix.forEach(r=>console.log(r.join(' ')));
}

checkerboardPattern(3);
checkerboardPattern(4);