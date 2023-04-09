//arr of nums, another num
//new arr with length of num, containing last even nums from arr
//[1, 2, 3, 4, 5, 6, 7, 8, 9], 3 => [4, 6, 8]
//[-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2 => [-8, 26]
//[6, -25, 3, 7, 5, 5, 7, -3, 23], 1 => [6]

// function lastEvenNums(arr, num){
//     //filter the array for even nums
//     let result = arr.filter(el => el % 2 === 0);
//     //return last (num) values of the arr
//     return result.slice(-num);
//   }

const lastEvenNums = (arr, num) => arr.filter(el => el % 2 === 0).slice(-num);

console.log(lastEvenNums([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), "4, 6, 8")
console.log(lastEvenNums([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), "-8, 26")
console.log(lastEvenNums([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), "6")