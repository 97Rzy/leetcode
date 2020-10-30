var deleteNode = function (head, val) {
  // 将链表转换为数组
  let listArr = [1, 2, 3, 4, 5];
  while (head) {
    listArr.push(listArr.value);
    head = head.next;
  }
  // 将指定数组从数组中删除
  for (let i = 0; i < listArr.length; i++) {
    if (listArr[i] === val) {
      listArr.splice(i, 1);
    }
  }
  console.log(listArr);
  // 将数组转换为链表
  return ListNode(listArr);
};
function ListNode(arr) {
  if (arr.length === 0) return null;
  // 第一个节点
  let head = { value: arr[0], next: null },
    // 临时变量，在循环中存储上一个节点
    p = head,
    // 存储当前节点
    node = {};
  for (let i = 1; i < arr.length; i++) {
    // 构建当前节点
    node = {
      value: arr[i],
      next: null,
    };

    // 将当前节点与之前节点连接
    p.next = node;

    // p 是临时变量，之前和 head 共同指向同一个内存地址
    // 这里 p 被重新赋值了，和 node 共同指向同一个内存地址
    // 设置当前节点为之前节点
    p = node;
  }
  return head;
}
