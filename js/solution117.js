//array of integers as strings and nums
//sum of array values as num
//[9, 3, '7', '3'] => 22
//['5', '0', 9, 3, 2, 1, '9', 6, 7] => 42
//['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'] => 41

// function sumMix(arr){
//   //changes all strings to nums
//   let result = arr.map(x => parseInt(x))
//   //sum arr to one value, return as num
//   return result.reduce((acc, c) => acc + c, 0)
// }

const sumMix = arr => arr.map(x => parseInt(x)).reduce((acc, c) => acc + c, 0);

console.log(sumMix([9, 3, '7', '3']), 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 