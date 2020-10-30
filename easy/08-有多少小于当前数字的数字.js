/* 输入：nums = [8,1,2,2,3]
输出：[4,0,1,1,3] */
let nums = [8, 1, 2, 2, 3];
var smallerNumbersThanCurrent = function (nums) {
  let countArr = [];
  // 统计个数
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    countArr.push(count);
    count = 0;
  }
  return countArr;
};
console.log(smallerNumbersThanCurrent(nums));
