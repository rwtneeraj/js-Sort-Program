const numberInDescending = function (list) {
  return list.sort(function (a, b) {
    return b - a;
  });
};

const stringInDescending = function (list) {
  return list.sort(function (a, b) {
    if (a < b) {
      return 1;
    }

    if (a === b) {
      return 0;
    }

    return -1;
  }
  );
};

const testCases = function () {
 console.log(numberInDescending([3, 4, 6, 3, 2, 9, 6, 1]));
 console.log(stringInDescending(["xyz", "abc", "klm"]))
};

testCases();