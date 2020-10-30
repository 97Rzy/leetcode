var merge = function (nums1, m, nums2, n) {
  nums1.splice(m);
  nums2.splice(n);
  nums1.push(...nums2);
  nums1.sort((a, b) => {
    return a - b;
  });
  return nums1;
};
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
console.log(merge(nums1, 3, nums2, 3));
