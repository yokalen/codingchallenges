//params - a sequence of numbers, a function
//return - true if the functino in the params returns true for every element, otherwise false
//example - (1,2,3,4,5), greater than 9 => false
//          (1,2,3,4,5), less than 9 => true
//psuedo code - filter the array with the function, if the original array matches the filtered array return true

function all( arr, fun ){
    if(arr.every(fun)){
        return true
    }else{
        return false
    }
}