/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/

//an array of numbers and a number
//index of where num would be inserted in a sorted array
//[1, 2, 3, 4, 5], 1.5 => 1
//[10, 9, 8], 7 => 0
//[5, 1, 4, 8, 9], 7 => 2

function whereIBelong(arr, num) {
    let newArr = arr.concat(num)
    let sortedArr = newArr.sort((a, b) => a - b)
    return sortedArr.indexOf(num)
 
 }
 
 console.log(whereIBelong([1, 2, 3, 4, 5], 1.5), 1)
 console.log(whereIBelong([10, 9, 8], 7), 0)
 console.log(whereIBelong([5, 1, 4, 8, 9], 7), 3)