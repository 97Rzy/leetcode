// nums = [2, 7, 11, 15], target = 9
var twoSum = function (nums, target) {
  let targetArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        targetArr.push(i, j);
      }
    }
  }
  return targetArr;
};
console.log(twoSum([3, 2, 3], 6));
