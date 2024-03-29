//an array of arrays
//number of possible unqiue arrays formed by taking 1 element from each sub array
//[[1,2],[4],[5,6]] => 4
//[[1,2],[4,4],[5,6,6]] => 4
//[[1,2],[3,4],[5,6]] => 8
//[[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]] => 72

function solve(arr){
    //remove duplicates
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = [...new Set(arr[i])]
        //multiply length of each sub array
        result *= arr[i].length
    }
    //return number
    return result;
}

console.log(solve([[1,2],[4],[5,6]]),4)
console.log(solve([[1,2],[4,4],[5,6,6]]),4)
console.log(solve([[1,2],[3,4],[5,6]]),8)
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)