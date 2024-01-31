//function zero() {} //function one() {}//function two() {} //function three() {} // function four() {} // function five() {} // function six() {} // function seven() {} // function eight() {} // function nine() {}  // function plus() {} // function minus() {} // function times() {} // function dividedBy() {}

//write calculations using function and get the results

//seven(times(five()))  returns 35 //four(plus(nine())) returns 13  //eight(minus(three()))  returns 5 //six(dividedBy(two()))  returns 3

function zero() {

}
function one() {

}
function two() {

}
function three() {

}
function four() {

}
function five() {
    //a number 5
    return 5;
}
function six() {

}
function seven(func) {
    //if function has an argument, return that function with 7 as an argument
    if(func){
        return func(7);
    }else{
    //a number 7
        return 7;}
    
}
function eight() {

}
function nine() {

}

function plus() {

}
function minus() {

}
function times(val2) {
    //multiply num 1 by num 2
    return function(val1){
        return val1 * val2;
    }
}
function dividedBy() {

}

//tests
console.log(seven(times(five())), 35)
// console.log(four(plus(nine())), 13)
// console.log(six(dividedBy(two())), 3)

