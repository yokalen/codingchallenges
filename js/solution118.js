//array of nums
//return avg of nums in arr rounded down
//[2, 2, 2, 2] => 2
//[2, 2, 3, 0] => 1
//[0, 0, 0, 4] => 1

function getAvg(arr){
  //add nums & divide by arr length
  let result = arr.reduce((acc, c) => acc + c, 0) / arr.length;
  //round down and return
  return Math.floor(result);
  
}

console.log(getAvg([2, 2, 2, 2]), 2)
console.log(getAvg([2, 2, 3, 0]), 1)
console.log(getAvg([0, 0, 0, 4]), 1)