let sortedArray = [1, 2, 5, 6, 7, 8, 11, 14, 17, 28, 37, 232];

const binarySearchIteratively = (array, target) => {
  let left = 0;
  let right = array.length - 1;
  let mid = array.length / 2;

  console.log(array[mid]);
  if (array[mid] === target) {
    return true;
  }
  if (array[mid] < target)
    return binarySearchIteratively(array.slice(left, mid), target);
  if (array[mid] > target)
    return binarySearchIteratively(array.slice(mid, right + 1), target);
  return false;
};

console.log(binarySearchIteratively(sortedArray, 37));
console.log(binarySearchIteratively(sortedArray, 22));
