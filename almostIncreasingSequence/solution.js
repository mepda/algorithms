function asis(arr) {
  //set asisb = true
  let asisb = true;
  //loop through array to i-i
  for (let i = 0; i < arr.length - 1; i++) {
    //if asisb=true && arr[i] > arr[i+1] then splice arr[i] and set asisb to false
    if (asisb === true && arr[i] > arr[i + 1]) {
      arr.splice(i, 1);
      asisb = false;
    }
    //if asisb=false && arr[i] > arr[i + 1] then return false
    else if (asisb === false && arr[i] > arr[i + 1]) {
      return "array isn't asis";
    }
  }
  return arr;
}

console.log(asis([1, 4, 3, 6, 5]));
