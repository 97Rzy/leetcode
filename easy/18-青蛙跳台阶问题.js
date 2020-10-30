var numWays = function (n) {
  var target = 0;
  var number1 = 1;
  var number2 = 2;
  if (n === 2) {
    return 2;
  }
  if (n <= 0 || n === 1) {
    return 1;
  }
  for (let i = 3; i <= n; i++) {
    target = number1 + number2;
    number1 = number2;
    number2 = target;
  }
  return target;
};
console.log(numWays(3));
