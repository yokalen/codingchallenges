//two arrays, a and b
//return a after all values b have been removed
//examples 
//[1,2], [1] => [2]
//[1,2,2], [1] => [2,2]
//[1,2,2,2,3], [2] => [1,3]

function arrayDiff(a, b) {
    for(let num in b){
        return a.filter(el => el !== b[num])
    }
}

console.log(arrayDiff([1,2], [1]), '[2]')
console.log(arrayDiff([1,2,2], [1]), '[2,2]')
console.log(arrayDiff([1,2,2,2,3], [2]), '[1,3]')