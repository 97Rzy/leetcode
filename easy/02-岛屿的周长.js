var islandPerimeter = function (grid) {
  // 定义一个变量存放岛屿的周长
  let c = 0;
  if (grid.length === 0) {
    return 0;
  }
  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === 1) {
        if ((grid[i - 1] && grid[i - 1][j]) !== 1) {
          c++;
        }
        if ((grid[i + 1] && grid[i + 1][j]) !== 1) {
          c++;
        }
        if (row[j - 1] !== 1) {
          c++;
        }
        if (row[j + 1] !== 1) {
          c++;
        }
      }
    }
  }
  return c;
};
console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
