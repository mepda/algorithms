function addBorder(picture: string[]): string[] {
  let final: string[] = [];
  let topAndBottomWall = '';
  for (let i = 0; i <= picture.length + 2; i++) {
    topAndBottomWall += '*';
  }
  console.log(topAndBottomWall);
  final.push(topAndBottomWall);
  for (let i = 0; i <= picture.length + 1; i++) {
    if (i === 0) {
      final[i] = topAndBottomWall;
    } else if (i === picture.length + 1) {
      final[i] = topAndBottomWall;
    } else {
      final[i] = '*' + picture[i - 1] + '*';
    }
  }
  return final;
}


function wallIt(picture: string[]): string[] {
  let result = [];
  [...picture].forEach((a)=>{result.push(`*${a}*`)})
  result.push("*".repeat(picture[0].length+2));
  result.unshift("*".repeat(picture[0].length+2));
  return result;
}

console.log(addBorder(['abc', 'def']));
console.log(wallIt(['abc', 'def', 'hij']));
