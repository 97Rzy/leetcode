var uniqueOccurrences = function (arr) {
  // 存放出现哪些数字的数组
  let showArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!showArr.includes(arr[i])) {
      showArr.push(arr[i]);
    }
  }
  // 定义每个数字出现的次数
  let count = 0;
  // 每个数字出现次数的数组
  let countArr = [];
  // 判断出现次数的数组中是否有重复出现的数字
  for (let i = 0; i < showArr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (showArr[i] === arr[j]) {
        count++;
      }
    }
    countArr.push(count);
    count = 0;
  }
  // 判断出现次数是否有重复
  for (let i = 0; i < countArr.length; i++) {
    for (let j = i + 1; j < countArr.length; j++) {
      if (countArr[i] === countArr[j]) {
        return false;
      }
    }
  }
  return true;
};
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
