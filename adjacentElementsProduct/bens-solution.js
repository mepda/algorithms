//finds the largest adjacent product of an array of numbers
function adjProdChecker(arr) {
  let largest;
  for (let i = 0; i < arr.length - 1; i++) {
    if (i === 0) {
      largest = arr[i] * arr[i + 1];
    } else {
      if (arr[i] * arr[i + 1] > largest) {
        largest = arr[i] * arr[i + 1];
      }
    }
  }
  return largest;
}

console.log(adjProdChecker([1, 2, 30, 4, 5, 6]));
