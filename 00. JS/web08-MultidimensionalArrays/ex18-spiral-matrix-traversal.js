function createMatrix(lines) {
    const mat = [];
    for (let l of lines) {
        mat.push(l.split(" ").map((n) => Number(n)));
    }
    return mat;
}

function spiralMatrix(mat = []) {
    const matrix = createMatrix(mat);

    const arr = [];

    while (matrix.length) {
        arr.push(
            ...matrix.shift(),
            ...matrix.map(a => a.pop()),
            ...(matrix.pop() || []).reverse(),
            ...matrix.map(a => a.shift()).reverse()
        );
    }
    console.log(arr.join(' '));
}

spiralMatrix(["1 2 3",
    "4 5 6",
    "7 8 9"]);
spiralMatrix(["1 2 3 4",
    "5 6 7 8",
    "9 10 11 12",
    "13 14 15 16"]);
spiralMatrix(["1 2",
    "3 4"]);