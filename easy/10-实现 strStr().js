let haystack = 'hello';
let needle = 'll';
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

// 使用substring
var strStr = function (haystack, needle) {
  if (needle === '') return 0;
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.substring(i, i + needle.length) === needle) return i;
    }
  }
  return -1;
};

console.log(strStr(haystack, needle));
