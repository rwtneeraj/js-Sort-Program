// numbers in ascending order

function numberInAscending(array) {
  return array.sort(function (a, b) {
    return a - b;
  });
}

// booleans in ascending order

function booleanInAscending(list) {
  return list.sort(function (a, b) {
    if (a === true) {
      return -1;
    }
    if (a === b) {
      return 0;
    }

    return 1;
  });
}

// string in asceding
function stringInAscending(list) {
  return list.sort();
}

// nested Array in ascending

const listsElementInAscending = function (element) {
  return element.sort(function (a, b) { return a - b; });
};

const listInAscending = function (list) {
  list.map(listsElementInAscending);

  return list.sort(function (a, b) {
    return a[0] - b[0];
  });
};

const list = [1, 3, 4, 5, 2, 1];
const boolean = [true, false, false, true, false];
const stringList = ["xyz", "abc", "klm"];
const nestedList = [[2, 3], [8, 9], [0, 3], [5, 4]];

const testCases = function () {
  // console.log(numberInAscending(list));
  // console.log(booleanInAscending(boolean));
  // console.log(stringInAscending(stringList));

  console.log(listInAscending(nestedList));
};

testCases();


