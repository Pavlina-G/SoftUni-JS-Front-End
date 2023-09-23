function fillMatrix(n, pattern) {
    let numbers = [];
    for (let i = 1; i <= n * n; i++) {
        numbers.push(i)
    }

    const matrix = Array(n)
        .fill().map(() => Array(n).fill(0));

    let count = 0;
    if (pattern === 'A') {
        while (count != n) {
            for (let c = 0; c < matrix[count].length; c++) {
                matrix[c][count] = numbers.shift()
            }
            count += 1;
        }
    } else {
        count = 0
        while (count != n) {
            if (count % 2 === 0) {
                for (let c = 0; c < matrix[count].length; c++) {
                    matrix[c][count] = numbers.shift()
                }
            } else {
                for (let r = n - 1; r >= 0; r--) {
                    matrix[r][count] = numbers.shift();
                }
            }
            count += 1;
        }
    }
    matrix.forEach(r => console.log(r.join(' ')))
}

fillMatrix(3, 'A');
fillMatrix(3, 'B');