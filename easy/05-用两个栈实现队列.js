var CQueue = function () {
  this.arr = [];
};
CQueue.prototype.appendTail = function (value) {
  this.arr.push(value);
};
CQueue.prototype.deleteHead = function () {
  if (this.arr.length < 1) {
    return -1;
  }
  this.arr.shift();
};
