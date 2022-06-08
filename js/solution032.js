//P: a non-negative integer n
//R: n in a binary format
//E: 1 => 1
//   5 => 101
//  11 => 1011
//   2 => 10

// function toBinary(n){
//   return Number(n.toString(2));
// }

//refactored
const toBinary = n => Number(n.toString(2))