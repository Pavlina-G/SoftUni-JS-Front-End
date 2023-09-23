function maxSum(mat = []) {
    const sumMat = [[0, 0], [0, 0]];
    const matrix = [];
    let a = 0, b = 0, c = 0, d = 0;
    const result = {};

    let maxSum = 0;

    for (let r of mat) {
        matrix.push(r.split(' ').map(n => Number(n)));
    }
    for (let r = 0; r < matrix.length - 1; r++) {
        for (let col = 0; col < matrix[r].length - 1; col++) {
            let sum = 0;
            a = matrix[r][col];
            b = matrix[r][col + 1];
            c = matrix[r + 1][col];
            d = matrix[r + 1][col + 1]

            let firstSum = a + b;
            let secondSum = c + d;

            sum += firstSum + secondSum;

            if (sum >= maxSum) {
                maxSum = sum;
                sumMat[0][0] = a;
                sumMat[0][1] = b;
                sumMat[1][0] = c;
                sumMat[1][1] = d;
            }
        }
    }
    result[maxSum] = sumMat;
    for (let key in result) {
        console.log(key);
        sumMat.forEach(row => console.log(row.join(' ')));
    }
}

maxSum(["7 1 3 3 2 1", "1 3 9 8 5 6", "4 6 7 9 1 0"]);
maxSum(["10 11 12 13", "14 15 16 17"]);
