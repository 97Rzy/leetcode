var searchInsert = function (nums, target) {
  // 先判断该数组中是否含有目标值，如果包含则直接返回索引
  if (nums.indexOf(target) > -1) {
    return nums.indexOf(target);
  } else {
    // 如果不包含索引值，先将目标值加入到数组中后再排序，再检索目标值的索引
    nums.push(target);
    nums.sort((a, b) => {
      return a - b;
    });
    return nums.indexOf(target);
  }
};
console.log(searchInsert([1, 3, 5, 6], 0));
