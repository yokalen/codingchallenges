//param - a string of space separated numbers, all nums are valid
//return - a string of two numbers separated by a single space, the higest first and the lowest
//example - 1 2 3 4 5 => 5 1
//          1 2 -3 4 5 => 5 -3
//          1 9 3 4 -5 => 9 -5
//psuedo code
//send the numbers to an array and sort the array high to low, then send the first and last to a new array, make that back into a string with a space seperator

function highAndLow(numbers){
    if(!numbers.includes(' ')){
        numbers = numbers + ' ' + numbers;
    }
    let arr = numbers.split(' ').sort((a,b) => b - a)
    let newArr = arr.shift() + ' ' + arr.pop()
    return newArr.toString()
}