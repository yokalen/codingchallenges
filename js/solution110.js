//Find Mean

//Find the mean (average) of a list of numbers in an array.
//1, 3, 5, 7 => 4

function avgNum(arr){
    return arr.reduce((acc, c) => acc + c, 0) / arr.length
}

console.log(avgNum([1, 3, 5, 7]), 4)
console.log(avgNum(1, 1, 1), 1)
console.log(avgNum([10, 20, 30, 40]), 25)