//function zero() {} //function one() {}//function two() {} //function three() {} // function four() {} // function five() {} // function six() {} // function seven() {} // function eight() {} // function nine() {}  // function plus() {} // function minus() {} // function times() {} // function dividedBy() {}

//write calculations using function and get the results

//seven(times(five()))  returns 35 //four(plus(nine())) returns 13  //eight(minus(three()))  returns 5 //six(dividedBy(two()))  returns 3

function zero(func) {
    if(func){
        return func(0);
    }else{
        return 0;}
}
function one(func) {
    if(func){
        return func(1);
    }else{
        return 1;}
}
function two(func) {
    if(func){
        return func(2);
    }else{
        return 2;}
}
function three(func) {
    if(func){
        return func(3);
    }else{
        return 3;}
}
function four(func) {
    if(func){
        return func(4);
    }else{
        return 4;}
}
function five(func) {
    if(func){
        return func(5)
    }else{
        //a number 5
        return 5;
    } 
}
function six(func) {
    if(func){
        return func(6);
    }else{
        return 6;}
}
function seven(func) {
    //if function has an argument, return that function with 7 as an argument
    if(func){
        return func(7);
    }else{
    //a number 7
        return 7;}
    
}
function eight(func) {
    if(func){
        return func(8);
    }else{
        return 8;}
}
function nine(func) {
    if(func){
        return func(9);
    }else{
        return 9;}
}

function plus(val2) {
    return function(val1){
        return val1 + val2;
    }
}
function minus(val2) {
    return function(val1){
        return val1 - val2;
    }
}
function times(val2) {
    //multiply num 1 by num 2
    return function(val1){
        return val1 * val2;
    }
}
function dividedBy(val2) {
    return function(val1){
        return val1 / val2;
    }
}

//tests
console.log(seven(times(five())), 35)
console.log(four(plus(nine())), 13)
console.log(six(dividedBy(two())), 3)

