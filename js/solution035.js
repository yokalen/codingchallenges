//parameters
//number of hotdogs

//return
//price of hotdogs, if n < 5 price is 100, if n is >= 5 and n < 10 price is 95, if n >= 10 price is 90

//example
//1 => 100
//4 => 400
//9 => 855
//10 => 900

//psuedo code
//if n < 5 return n * 100, if n >= 10 return n * 90, otherwise return n * 95

function saleHotdogs(n){
  return n < 5 ? n * 100 : n >= 10 ? n * 90 : n * 95;
}