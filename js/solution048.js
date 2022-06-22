//p
//number n with more than two decimal places

//r
//number n rounded to two decimal places

//e
//5.5589 => 5.56
//3.3424 => 3.34

//p
//return number rounded to two decimal places

// function twoDecimalPlaces(n) {
//     return Number(n.toFixed(2));
//   }

//another way of doing it 
function twoDecimalPlaces(n) {
    return Math.round(n*100)/100;
}