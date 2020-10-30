let arr = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

var findNumberIn2DArray = function (matrix, target) {
  var flag = new Boolean();
  for (let i = 0; i < matrix.length; i++) {
    let arr1 = matrix[i];
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === target) {
        flag = true;
      }
    }
  }
  return flag;
};
console.log(findNumberIn2DArray(arr, 2));
