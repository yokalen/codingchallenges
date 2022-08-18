//params
//an array of arrays with whole numbers, the shifting value. the arrays will always have the same number of values, and will never be empty

//return
//the values of the arrays added into one new array using the shifting value to determine how far over the second array begins adding

//example
//[[1,2,3,4,5,6], [7,7,7,7,7,-7]], 0 => [8,9,10,11,12,-1]
//[[1,2,3,4,5,6], [7,7,7,7,7,7]], 3 => [1,2,3,11,12,13,7,7,7]

//psuedo code
//declare a new array that will be the result
//add 0s to the beginning of the second array and end of the first array according to the shifting value
//add the space for each array

function addingShifted (arrayOfArrays, shift) {
  let arrA = arrayOfArrays[0][0];
  let arrB = arrayOfArrays[0][1];
  let solution = []
  for(i = 1; i <= shift; i++){
    arrA = arrA.push(0);
    arrB = arrB.unshift(0);
  }
  for (let i = 0; i < arrayOfArrays[0].length - 1; i++){
    solution.push(arrA[i] + arrB[i])
  }
}


