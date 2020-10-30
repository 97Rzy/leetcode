var reversePrint = function (head) {
  let resArr = [];
  while (head) {
    resArr.push(head.val);
    head = head.next;
  }
  return resArr.reverse();
};
