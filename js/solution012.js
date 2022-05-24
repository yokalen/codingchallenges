//P: two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b.
//R: difference of the cuboids' volumes regardless of which is bigger
//E: ([2, 2, 3], [5, 4, 1]) => 8
//   ([1,2,3], [4,5,1]) => 14
//   ([3,4,6],[7,4,2]) => 16
//   ([1,4,2],[2,4,7]) => 48
//P: multiply the three integers in list a to find the product
//   multiply the three integers in list b to find the product
//   return the absolute value of a - b
// function findDifference(a, b) {
//   return Math.abs(a.reduce((acc, c) => acc * c, 1) - b.reduce((acc, c) => acc * c, 1))
// }
//write code on one line
let findDifference = (a, b) => Math.abs(a.reduce((acc, c) => acc * c, 1) - b.reduce((acc, c) => acc * c, 1))