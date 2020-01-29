function multiplicationTable(row,col){
  //your code here
  let result = []
  for (let i = 1; i <= row; i++) {
    result.push([]);
    for (let j = 1; j <= col; j++) {
      result[i - 1].push(i * j)
    }
  }
  return result
}

console.log(multiplicationTable(2,5));
