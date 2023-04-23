//arr of nums, n
//nth smallest num
//[3,1,2], 2 => 2
//[15, 20, 7, 10, 4, 3], 3 => 7
//[177, 225, 243, -169, -12, -5, 2, 92], 5 => 92

// function nthSmallestNum(arr, n){
//     //sort the array in descending order
//     let arrSort = arr.sort((a, b) => b - a).slice(-n)
//     //return sorted array [-n]
//     return arrSort[0]
//   }
//other way to do that in reverse
  function nthSmallestNum(arr, n){
    //sort the array in ascending order
    let arrSort = arr.sort((a, b) => a - b)
    //return sorted array [n - 1]
    return arrSort[n - 1]
  }

console.log(nthSmallestNum([3,1,2], 2), 2);
console.log(nthSmallestNum([15, 20, 7, 10, 4, 3], 3), 7);
console.log(nthSmallestNum([177, 225, 243, -169, -12, -5, 2, 92], 5), 92);