var isPalindrome = function (s) {
  s = s.toLocaleLowerCase().split('');
  let newArr = [];
  let resArr = [];
  for (let i = 0; i < s.length; i++) {
    if ((s[i] >= 0 && s[i] <= 9) || (s[i] >= 'a' && s[i] <= 'z')) {
      newArr.push(s[i]);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== ' ') {
      resArr.push(newArr[i]);
    }
  }
  let newStr = resArr.join('');
  if (newStr === newStr.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome('A man, a plan, a canal: Panama'));
