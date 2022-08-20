//params
//an array of numbers

//return the average number of the array rounded down to the nearest integer

//example
//[2,2,2,2] => 2
//[1,2,3,4,5] => 3

//psuedo code
//reduce the array by adding up all the numbers
//divide by length of the array
//round down

//first try
function getAverage(marks){
    let sum = marks.reduce((acc,c)=>(acc+c,0))
    let avg = sum / marks.length
    return Math.floor(avg);
  }