//P: base, factor
//R: true or false - is factor a factor of base
//E: 6, 3 => true
//   6, 2 => true
//   7, 2 => false
//   1, 2 => false
//P: check if base mod factor is 0
//   if yes return true, otherwise false
// function checkForFactor (base, factor) {
//   return base % factor === 0
// }
//refactored code
const checkForFactor = (base, factor) => base % factor === 0;