/* 
 Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length.
*/

//array, size 
//all arrays of the spec size from array
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5 => [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]
//[1, 2, 3], 1 => [[1], [2], [3]]
//[1, 2, 3, 4], 5 => [1, 2, 3, 4]

function chunkArray(array, size) {
    let result = []
    for(let i = size; i < array.length; i + size){
        result += array.slice((i - size), i - 1) 
    }
    return result.concat(slice(array.length - (array.length % size))) 
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5), [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]])