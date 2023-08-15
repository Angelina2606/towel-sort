
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr=[];
  if(typeof matrix !== 'undefined'){
  for (i = 0; i < matrix.length; i++){
    if(!(i %2)){
      arr = arr.concat(matrix[i]);
    } else {
      arr = arr.concat(matrix[i].reverse());
      }
  }
} else {
  return [];
}
  return arr;
}
