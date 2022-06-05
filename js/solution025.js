//P: high price, discount, cost of vacation
//R: number of bottles you have to buy at a discount that the savings over the high price will cover the cost of vacation
//E: 10, 10%, 500 => 500
//   20, 8%, 800 => 500
//   15, 12%, 900 => 500
//   10, 20%, 600 => 300
//P: 
// return cost of vacation divided by the high price times the discount

//first try
// function dutyFree(price, discount, vacation){
//     return Math.floor( vacation / (price * (discount/100) ) );
// }

//refactored
const dutyFree = (price, discount, vacation) => Math.floor( vacation / (price * (discount/100) ) );