var missingNumber = function (nums) {
  // 用数组的后一项减前一项 判断是否等于2
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] === 2) {
      return nums[i] + 1;
    }
  }
  if (nums[0] === 0) {
    return nums[nums.length - 1] + 1;
  } else {
    return 0;
  }
};
console.log(missingNumber([1]));
