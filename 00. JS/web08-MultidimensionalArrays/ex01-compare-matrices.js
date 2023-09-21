function compareMatrices(mat1 = [], mat2 = []) {

  let notEqaul = false;

  if (mat1.length != mat2.length) {
    console.log('not equal');
    return
  }

  for (let r1 = 0, r2 = 0; r1 < mat1.length, r2 < mat2.length; r1++, r2++) {
    for (let c1 = 0, c2 = 0; c1 < mat1[r1].length, c2 < mat2[r2].length; c1++, c2++) {
      let num1 = mat1[r1][c1];
      let num2 = mat2[r2][c2];
      if (num1 !== num2) {
        notEqaul = true;
        console.log('not equal');
        return
      }
    }
  }

  if (!notEqaul) {
    console.log('equal');
  }
}

compareMatrices(
  [
    [1, 2, 3],
    [2, 1, 3],
  ],
  [
    [1, 2, 3],
    [2, 1, 3],
  ]
);

compareMatrices(
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [1, 3],
    [4, 5],
  ]
);
