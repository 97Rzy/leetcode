var modifyString = function (s) {
  // 先将字符串转换为数组
  let strArr = s.split('');
  // 如果数组的长度为0则返回-1
  if (strArr.length === 0) {
    return -1;
  }
  // 对数组进行遍历
  for (let i = 0; i < strArr.length; i++) {
    // 如果当前元素为‘?'
    if (strArr[i] === '?') {
      // 定义替换?的字符
      let str = '';
      // 如果字符数组的长度为1，则将当前元素传入到替换函数中
      // 如果遍历的当前元素为数组的第一个元素，则将当前元素的后一个元素传入到替换函数中
      // 如果遍历的当前元素为数组的最后一个元素，则将当前元素的前一个元素传入到替换函数中
      // 如果遍历的当前元素为数组的中间元素，则将当前元素的前一个元素和后一个元素都传入到替换函数中
      if (strArr.length === 1) {
        str = replaceFunc([strArr[i]]);
      } else if (i === 0) {
        str = replaceFunc([strArr[i + 1]]);
      } else if (i === strArr.length - 1) {
        str = replaceFunc([strArr[i - 1]]);
      } else {
        str = replaceFunc([strArr[i - 1], strArr[i + 1]]);
      }
      strArr.splice(i, 1, str);
    }
  }
  return strArr.join('');
};
// 替换函数
var replaceFunc = function (args) {
  // 接收传入的参数
  let [s1, s2] = [...args];
  // 定义26个字母的数组
  let allStr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  // 如果s1为undefined,则将26个字母的数组去除s2即可
  // 如果s2为undefined,则将26个字母的数组去除s1即可
  // 如果两个元素都不为undefined，则将s1和s2都去除
  // 随机返回去除后数组中的任意一个字符
  if (s1 === undefined) {
    allStr = allStr.filter((item) => {
      return item !== s2;
    });
  } else if (s2 === undefined) {
    allStr = allStr.filter((item) => {
      return item !== s1;
    });
  } else {
    allStr = allStr.filter((item) => {
      return item !== s1 && item !== s2;
    });
  }
  let num = parseInt(Math.random(allStr.length) * 24);
  return allStr[num];
};
console.log(modifyString('?zs'));
