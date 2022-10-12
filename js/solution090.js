//param is whole, positive num
//return num with digits in descending order
//42145 => 54421
//145263 => 654321
//123456789 => 987654321

function descendingOrder(num){
    //split num into array of nums
    return Number(num.toString().split('')
    //sort arr in descending order
    .sort((a, b) => b - a)
    //join and return
    .join(''))
  }

console.log(descendingOrder(42145))
console.log(descendingOrder(145263))
console.log(descendingOrder(123456789))