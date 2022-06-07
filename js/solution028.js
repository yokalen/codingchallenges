//P: list of numbers
//R: list of numbers corrected to count up from the lowest number to the highest by increments of 1 with no duplicates
//E: 1,3,5,6,7,8 => 1,2,3,4,5,6,7,8
//P: 
// sort the list of numbers lowest to highest
// create a new array
// starting with the lowest number, add each number to the new array until reaching the higest number
// return the correct array

function pipeFix(numbers){
    let start = numbers[0];
    let end = numbers[numbers.length - 1]
    let arr = []
    for(let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr;
}