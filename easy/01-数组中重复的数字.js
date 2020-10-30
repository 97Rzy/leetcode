var findRepeatNumber = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  let preNum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (preNum === nums[i]) {
      return preNum;
    }
    preNum = nums[i];
  }
};
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
