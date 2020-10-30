function array2list(arr) {
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
let res = array2list([7, 0, 8]);
console.log(res);
