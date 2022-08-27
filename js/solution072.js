//param - an array of integers
//return - a new array that processes every number in the array so that if the number has an integer square root, return that, otherwise square the number
//example - [4,3,9,7,2,1] => [2,9,3,49,4,1]
//psudeo code - iterate through the array, for each number check to see if it has an integer square root, if so return that, if not square the number

function squareOrSquareRoot(array) {
    let newArr = array.map(el => {
        if(Math.round(Math.sqrt(el)) === Math.sqrt(el)){
            return Math.sqrt(el);
        }else{
            return Math.pow(el, 2)
        }
    })
    return newArr;
  }
  console.log(squareOrSquareRoot([4,3,9,7,2,1]))