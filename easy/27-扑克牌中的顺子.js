var isStraight = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] !== 1) {
      return false;
    }
    return true;
  }
};
console.log(isStraight([0, 0, 1, 2, 5]));
