function matricesIntersection(m, n, line1, line2) {
    const matrix = [];
    const mat1 = [];
    const mat2 = [];
    
    line1.forEach(line => mat1.push(line.split(' ')));
    line2.forEach(line => mat2.push(line.split(' ')));

    for (let r = 0; r < m; r++) {
        matrix.push([])
        for (let c = 0; c < n; c++) {
            matrix[r].push('*')
        }
    }
    for (let r1 = 0, r2 = 0; r1 < mat1.length, r2 < mat2.length; r1++, r2++) {
        for (let c1 = 0, c2 = 0; c1 < mat1[r1].length, c2 < mat2[r2].length; c1++, c2++) {
            let p1 = mat1[r1][c1];
            let p2 = mat2[r2][c2];
            // console.log(p1,p2);
            if (p1 === p2) {
                matrix[r2][c2] = p1;
            }
        }
    }
    matrix.forEach(r => console.log(r.join(' ')));
}

matricesIntersection(
    3,
    4,
    ["a b c d", "a b c d", "a b c d"],
    ["k b c k", "a b g d", "a k c d"]
);
matricesIntersection(
    5,
    2,
    ["1 2", "3 4", "5 6", "7 8", "9 1"],
    ["0 2", "3 1", "1 6", "7 4", "1 1"]
);
