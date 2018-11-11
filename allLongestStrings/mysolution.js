//returns all longest strings (aka als)

function als(arr) {
  let len = 0;
  let rArr = [];
  arr.forEach(el => {
    if (el.length > len) {
      rArr = [];
      rArr.push(el);
      len = el.length;
    } else if (el.length == len) {
      rArr.push(el);
    }
  });
  return rArr;
}
let myArr = ['134', '12', '455', '578', '11', '777'];
console.log(als(myArr));
