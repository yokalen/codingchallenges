//arr of 3 distinct nums
//index of num that lies between other nums numerically
//[2,3,1]=>0
//[5,10,14]=>1
//[100,300,200]=>2

function gimme(arr){
    //sort the arr as a new arr, find the middle num
    //get the index of the middle num from the original arr
    let sorted = arr.slice().sort((a, b) => a - b)
    let midNum = sorted[1]
    return arr.indexOf(midNum)
}

console.log(gimme([2,3,1]), 0)
console.log(gimme([5,10,14]), 1)
console.log(gimme([100,300,200]), 2)