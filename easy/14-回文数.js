var isPalindrome = function (x) {
  // 将数字转换为字符串并且拆分加到数组中将数组进行反转进行判断即可
  let resStr = x.toString().split('').reverse().join('');
  if (x.toString() === resStr) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome(-121));
