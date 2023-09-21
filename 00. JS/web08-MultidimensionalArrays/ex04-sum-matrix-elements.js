function printMatrixInfo(matrix=[]) {
    console.log(matrix.length);
    let sum = 0;
    console.log(matrix[0].length);
    for (let row of matrix){
        sum += row.reduce((total, el)=>total += el,0);
    }
    console.log(sum);

}

printMatrixInfo([
  [7, 1, 3, 3, 2, 1],
  [1, 3, 9, 8, 5, 6],
  [4, 6, 7, 9, 1, 0],
]);
printMatrixInfo([
  [10, 11, 12, 13],
  [14, 15, 16, 17],
]);
