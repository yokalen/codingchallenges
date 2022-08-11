//params
//a positive whole integer

//return
//the nearest square number 

//example
//1 => 1
//2 => 1
//10 => 9
//111 => 121

//psuedo code
//if n % 

function nearestSq(n){
    return Math.pow(Math.round(Math.sqrt(n)));
}