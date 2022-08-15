//params
//numbers a, b, and an optional margin 

//return 
//whether a is lower than, close to, or higher than b
//a is considered close to b if margin is greater than or equal to the distance between a and b
//when a is close to be, return 0
//when a is less than b, return -1
//when a is greater than b, return 1
//margin is 0 if not specificed

//example
//a = 3, b = 5, margin = 3 => 0
//3, 5, 0 => -1
//5, 5 => 0
//-6, -5 => -1

//psuedo code
//abs(a - b) <= margin || 0 ? return 0
//a < b ? -1
//a > b ? 1


