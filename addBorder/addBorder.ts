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

console.log(addBorder(['abc', 'def']));
console.log(addBorder(['abc', 'def', 'hij']));
