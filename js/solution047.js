//p
//array of numbers

//r
//sum of the differences of consecutive pairs

//e
//[10, 2, 1] => (10 - 2) + (2 - 1) = 8 + 1 = 9

function sumOfDifferences(arr) {
    let sum = 0;
    let sortedArr = arr.sort((a, b) => b - a);
    for(let i = 0; i < sortedArr.length - 1; i++){
        sum += sortedArr[i] - sortedArr[i + 1];
    }
    return sum;
}