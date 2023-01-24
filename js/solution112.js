//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//integer, whole num, no funny biz
//"Even" or "Odd" 
//0 => "Even"
//1 => "Odd"
//1000000 => "Even"

const numStatus = num => num % 2 === 0 ? "Even" : "Odd";

console.log(numStatus(0), "Even")
console.log(numStatus(1), "Odd")
console.log(numStatus(100000), "Even")
