// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1

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