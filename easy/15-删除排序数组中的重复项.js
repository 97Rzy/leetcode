// 只能在本数组中实现
var removeDuplicates = function (nums) {
  // 利用变量存储每次进行判断的项
  let pre = nums[0];
  for (let i = 1; i < nums.length; ) {
    if (pre === nums[i]) {
      nums.splice(i, 1);
    } else {
      pre = nums[i++];
    }
  }
  return nums;
};
console.log(removeDuplicates([1, 1, 1, 1]));
