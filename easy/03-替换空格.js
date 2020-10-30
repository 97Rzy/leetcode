let s = 'We are happy.';
var replaceSpace = function (s) {
  let strArr = s.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] == ' ') {
      strArr[i] = '%20';
    }
  }
  return strArr.join('');
};
// 方法二
function func(s) {
  return s.split(' ').join('%20');
}
console.log(func(s));
