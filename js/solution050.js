//params
//an array of numbers
//return
//a new array of elements which are multiple of their own index in the array parameter
//examples
//[22,-6,32,82,9,25] => [-6,32,25]
//[68,-1,1,-7,10,10] => [-1,10]
//[11, -11] => [-11]

function multipleOfIndex(array) {
    let result = [];
    for(let i = 0; i < array.length; i++){
      if(array[i] % i === 0){
        result.push(array[i])
         }
     }
     return result;
    }