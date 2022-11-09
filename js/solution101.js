//arr1 ordered sequence 1 to n, arr2 nums mixed with 1 possibly deleted
//the num that was deleted, or 0 if none
//[1,2,3,4,5], [3,4,1,5] => 2
//[1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8] => 5
//[1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3] => 0

//first try
// function findDeletedNumber(arr, mixArr) {
//     //if arr.length === mixArr.length return 0
//     if(arr.length === mixArr.length){
//         return 0;
//     }
//     //for loop
//     for(let num in arr){
//         if(mixArr.indexOf(arr[num]) === -1){
//             return arr[num];
//         }
//     }
//     return 0;
//     }

//filter
function findDeletedNumber(arr, mixArr){
    return arr.filter(num => mixArr.indexOf(num) === -1)[0] || 0;
}

console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2)
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5)
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0)