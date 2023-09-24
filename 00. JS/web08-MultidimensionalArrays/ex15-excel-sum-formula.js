function excelSum(mat = [], range) {
    const matrix = mat;
    let rangeInfo = range.split(":");
    let ranges = [];
    for (let info of rangeInfo) {
        let [col, row] = info.split("");
        ranges.push([col, Number(row - 1)]);
    }

    let start = 65;
    const cols = {};

    for (let r = 0; r < matrix.length; r++) {
        cols[String.fromCharCode(start)] = r;
        start += 1;
    }
    let sum = 0;

    for (let r = ranges[0][1]; r <= ranges[1][1]; r++) {
        for (let c = cols[ranges[0][0]]; c <= cols[ranges[1][0]]; c++) {
            sum += matrix[r][c];
        }
    }
    console.log(sum);
}

    excelSum(
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ],
        "A1:C2"
    );
    excelSum(
        [
            [0, 1, 0, 0],
            [0, 0, 0, 1],
            [1, 0, 0, 0],
            [0, 1, 0, 0],
        ],
        "A1:B4"
    );
    excelSum(
        [
            [0, 1, 0, 0],
            [0, 0, 0, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        "A1:C4"
    );
