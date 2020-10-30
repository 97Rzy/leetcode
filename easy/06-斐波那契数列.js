var fib = function (n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let res1 = 0;
  let res2 = 1;
  for (let i = 0; i < n; i++) {
    let temp = res2;
    res2 = (res1 + res2) % 1000000007;
    res1 = temp;
  }
  return res1;
};
console.log(fib(2));
