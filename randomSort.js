const list = [3, 4, -1, 2, -3, -4, 1];

const randomSort = function (list) {
  return list.sort(function (a, b) {
      return Math.abs(a) - Math.abs(b);
  });
};

console.log(randomSort(list));