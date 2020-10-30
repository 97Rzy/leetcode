var containsDuplicate = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  if (nums.length === 0 || nums.length === 1) {
    return false;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      return true;
    }
    if (i === nums.length - 1) {
      return false;
    }
  }
};
console.log(containsDuplicate([3, 1]));
