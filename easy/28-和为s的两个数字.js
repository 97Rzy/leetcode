var twoSum = function (nums, target) {
  // 利用双指针的方法
  // 左指针
  let left = 0;
  // 右指针
  let right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      return [nums[left], nums[right]];
    } else if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      return [-1, -1];
    }
  }
};
