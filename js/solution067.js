//params
//an array of unique values

//return
//rearrange the values so that the max value is first, followed by the min value, followed by the second max value, followed by the second min value, etc.

//example
//[15,11,10,7,12] => [15,7,12,10,11]
//[91,75,86,14,82] => [91,14,86,75,82]
//[1,6,9,4,3,7,8,2] => [9,1,8,2,7,3,6,4]

//psuedo code
//sort the array max to min
//create an answer array that is empty
//while the array has values, alternate shifting and poping onto new array

function solve(arr){
    arr.sort((a,b) => (b - a));
    let answer = [];
    while (arr.length > 0){
        answer.push(arr.shift());
        answer.push(arr.pop())
    }
    return answer.filter(x => x);
};