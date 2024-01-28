//Array of nums
//return the only num that appears an odd number of times
//[7] => 7 // [1, 1, 2] => 2 // [0, 1, 0, 1, 0] => 0
//create a new object
function oddAppearance(arr){
    let appearances = {}
    //start a new key at 1 or add one to current count
    arr.forEach(x => appearances[x] = appearances[x] + 1 || 1);
    for(key in appearances){
        //once the count is complete return the key with the odd value
        if(appearances[key] % 2 !== 0){
            return Number(key)
        
    }
}}

console.log(oddAppearance([7]))
console.log(oddAppearance([1, 1, 2]))
console.log(oddAppearance([0, 1, 0, 1, 0]))