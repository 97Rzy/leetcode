var maximumProduct = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  let arrLength = nums.length;
  let res = nums[0] * nums[1] * nums[arrLength - 1];
  let res1 = nums[arrLength - 1] * nums[arrLength - 2] * nums[arrLength - 3];
  return Math.max(res, res1);
};
