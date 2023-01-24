//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

//whole num from 1 to 12
//num 1, 2, 3, or 4 - whichever quarter month is in
//1 => 1
//7 => 3
//12 => 4

const quarter = num => Math.ceil(num/3);

console.log(quarter(1), 1);
console.log(quarter(7), 3);
console.log(quarter(12), 4);
