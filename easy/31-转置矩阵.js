var transpose = function (A) {
  let newArr = [];
  for (let i = 0; i < A[0].length; i++) {
    let row = [];
    for (let j = 0; j < A.length; j++) {
      row.push(A[j][i]);
    }
    newArr.push(row);
  }
  return newArr;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
