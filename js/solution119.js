//arr of nums
//sum of unique nums
//[4,5,7,5,4,8] => 15
//[16, 0, 11, 4, 8, 16, 0, 11] => 12
//[5, 10, 19, 13, 10, 13] => 24

function repeats(arr){
  let result = arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el));
  return result.reduce((acc, c) => acc + c, 0)
}