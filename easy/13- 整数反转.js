var reverse = function (x) {
  let flag = '';
  // 将整数转换为字符串
  let numStr = x.toString().split('');
  if (numStr[0] === '-') {
    flag = '-';
  }
  // 将数组转换为字符串
  numStr = numStr.reverse().join('');
  // 将数组转换为字符串
  let res = Number(flag + parseInt(numStr));
  // 判断整数是否溢出
  if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) {
    return 0;
  } else {
    return res;
  }
};
console.log(reverse(1534236469));
