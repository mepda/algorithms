function adjacentElementsProduct(inputArray: number[]): number {
  let firstProduct = inputArray[0] * inputArray[1];
  for (let i = 1; i < inputArray.length - 1; i++) {
    if (inputArray[i] * inputArray[i + 1] > firstProduct) {
      firstProduct = inputArray[i] * inputArray[i + 1];
    }
  }
  return firstProduct;
  // let largestProduct = inputArray[0] * inputArray[1];

  // for (let i = 1; i < inputArray.length - 1; i++) {
  //     const product = inputArray[i] * inputArray[i + 1];

  //     largestProduct = largestProduct < product ? product : largestProduct;
  // }

  // return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
