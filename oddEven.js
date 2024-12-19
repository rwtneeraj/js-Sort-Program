const isEven = function (num) {
  return num % 2 === 0;
};

function doesCompare(a, b) {
  if (isEven(a + b)) {
    return a - b;
  }

  return isEven(a) ? 1 : -1;
}

const oddEvenOrder = function (list) {
  return list.sort(doesCompare);
};

console.log(oddEvenOrder([1, 2, 5, 3, 6, 7, 9, 6, 8, 9, 0]));
console.log(oddEvenOrder([39, 0, 16, 97, 5, 8, 23, 93]));