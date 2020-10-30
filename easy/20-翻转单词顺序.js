// 使用for循环进行遍历
var reverseWords = function (s) {
  let arr = s.trim().split(' ').reverse();
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '') {
      resArr.push(arr[i]);
    }
  }
  return resArr.join(' ');
};
// 方法2：使用filter
var reverseWords = function (s) {
  let arr = s.trim().split(' ').reverse();
  arr = arr.filter((item) => {
    return item != '';
  });
  return arr.join(' ');
};
console.log(reverseWords('a good   example'));
