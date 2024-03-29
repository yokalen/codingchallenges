/* 
 Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length.
*/

//array, size 
//all arrays of the spec size from array
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5 => [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]
//[1, 2, 3], 1 => [[1], [2], [3]]
//[1, 2, 3, 4], 5 => [1, 2, 3, 4]

//for loop
// function chunkArray(array, size) {
//     let result = []
//     for(value of array){
//         let lastArray = result[result.length - 1]
//         if(!lastArray || lastArray.length === size){
//             result.push([value])
//         }else{
//             lastArray.push(value)
//         }
//     }
//     return result
// }

//splice
// function chunkArray(array, size){
//     let result = []
//     let arrayCopy = [...array]
//     while(arrayCopy.length > 0){
//         result.push(arrayCopy.splice(0, size))
//     }
//     return result
// }

//slice
function chunkArray(array, size){
    let result = []
    for(let i = 0; i < array.length; i += size){
        let chunk = array.slice(i, i + size)
        result.push(chunk)
    }
    return result
}

//recursion
// function chunkArray(array, size){
//     if(array.length <= size){
//         return [array]
//     }

//     return [array.slice(0, size), ...chunkArray(array.slice(size), size)]
// }

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5), [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]])
console.log(chunkArray([1, 2, 3], 1), [[1], [2], [3]])
console.log(chunkArray([1, 2, 3, 4], 5), [1, 2, 3, 4])