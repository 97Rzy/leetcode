var sortedSquares = function (A) {
  // 定义一个存放结果的数组
  let resArr = [];
  // 将排完序的数组进行遍历
  for (let i = 0; i < A.length; i++) {
    resArr.push(A[i] * A[i]);
  }
  // 将计算完的数组进行排序
  resArr.sort((a, b) => {
    return a - b;
  });
  return resArr;
};
console.log(sortedSquares([-7, -3, 2, 3, 11]));
