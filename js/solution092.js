//params - an array of whole nums and a whole pos num
//return a new array with a length of num that contains the last even numbers of the input array
//([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function evenNumbers(arr, num){
    //create new arr - filter even nums from arr
    let newArr = arr.filter(el => el % 2 === 0)
    //slice num spaces from the end
    return newArr.slice(-(num))
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), '[4,6,8]')
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), '[-8, 26]')
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), '[6]')