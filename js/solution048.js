//params
//number n with more than two decimal places

//return
//number n rounded to two decimal places

//example
//5.5589 => 5.56
//3.3424 => 3.34

//first try
// function twoDecimalPlaces(n) {
//     return Number(n.toFixed(2));
//   }

//another way of doing it 
// function twoDecimalPlaces(n) {
//     return Math.round(n*100)/100;
// }

//refactored first solution
// const twoDecimalPlaces = n => Number(n.toFixed(2));

//refactored second way of doing it
const twoDecimalPlaces = n => Math.round(n*100)/100;