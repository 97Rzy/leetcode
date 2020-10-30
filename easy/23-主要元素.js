var majorityElement = function (nums) {
  // 定义一个存放出现数字的数组
  let showArr = [];
  nums.forEach((item) => {
    if (!showArr.includes(item)) {
      showArr.push(item);
    }
  });
  // 将每个出现的数字以及次数存入到数组中
  let resArr = [];
  // 定义出现的次数
  let count = 0;
  for (let i = 0; i < showArr.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (showArr[i] === nums[j]) {
        count++;
      }
    }
    resArr.push({ num: showArr[i], count: count });
    count = 0;
  }
  let res = resArr[0];
  for (let i = 0; i < resArr.length; i++) {
    if (res.count < resArr[i].count) {
      res = resArr[i];
    }
  }
  return res.count > nums.length / 2 ? res.num : -1;
};

let arr = [1, 2, 5, 9, 5, 9, 5, 5, 5];

console.log(majorityElement(arr));
