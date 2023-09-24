function createMatrix(lines) {
    const mat = [];
    for (let l of lines) {
        mat.push(l.split(" ").map((n) => Number(n)));
    }
    return mat;
}

function maxSquareSum(mat = []) {
    const matrix = createMatrix(mat);
    let size = 3;

    const rows = matrix.length;
    const cols = matrix[0].length;
    const dp = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            dp[i][j] = matrix[i][j];
            if (i > 0) dp[i][j] += dp[i - 1][j];
            if (j > 0) dp[i][j] += dp[i][j - 1];
            if (i > 0 && j > 0) dp[i][j] -= dp[i - 1][j - 1];
        }
    }

    let maxSum = 0;
    let maxSquareMat = [];

    for (let i = size - 1; i < rows; i++) {
        for (let j = size - 1; j < cols; j++) {
            let subSum = dp[i][j];
            if (i >= size) subSum -= dp[i - size][j];
            if (j >= size) subSum -= dp[i][j - size];
            if (i >= size && j >= size) subSum += dp[i - size][j - size];

            if (subSum >= maxSum) {
                maxSum = subSum;
                maxSquareMat = matrix.slice(i - size + 1, i + 1).map(row => row.slice(j - size + 1, j + 1));
            }
        }
    }

    console.log(maxSum);
    maxSquareMat.forEach(r => console.log(r.join(' ')));
}


maxSquareSum(["1 5 5 2 4",
    "2 1 4 14 3",
    "3 7 11 2 8",
    "4 8 12 16 4"]);
maxSquareSum(["1 0 4 3 1 1",
    "1 3 1 3 0 4",
    "6 4 1 2 5 6",
    "2 2 1 5 4 1",
    "3 3 3 6 0 5"]);