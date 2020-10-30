let s = '';
var isUnique = function (astr) {
  let strArr = astr.split('').sort();
  console.log(strArr);
  let flag = new Boolean();
  if (strArr.length != 0) {
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i] !== strArr[i - 1] && strArr[i] !== strArr[i + 1]) {
        flag = true;
      } else {
        return false;
      }
    }
  } else {
    return true;
  }
  return flag;
};
console.log(isUnique(s));
