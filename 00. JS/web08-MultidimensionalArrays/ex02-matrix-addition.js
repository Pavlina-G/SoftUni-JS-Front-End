function matrixAddition(mat1, mat2) {
    let sumMatrix = [];

    for (let r1 = 0, r2 = 0; r1 < mat1.length, r2 < mat2.length; r1++, r2++) {
        let newRow = [];
        for (let c1 = 0, c2 = 0; c1 < mat1[r1].length, c2 < mat2[r2].length; c1++, c2++) {
            let sum = mat1[r1][c1] + mat2[r2][c2]
            newRow.push(sum);
        }
        sumMatrix.push(newRow);
    }
    sumMatrix.forEach(r => console.log(r.join(' ')));
}


matrixAddition(
    [
        [1, 2],
        [3, 4],
    ],
    [
        [2, 2],
        [2, 2],
    ]
);
matrixAddition(
    [
        [1, 2, 3],
        [4, 3, 1],
    ],
    [
        [1, 2, 3],
        [4, 2, 2],
    ]
);
