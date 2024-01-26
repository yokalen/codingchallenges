// Square every digit of a number
// Return concatenated squares
// 9119 => 811181 // 765 => 493625 // 2024 => 40416

function squareDigits(num){
    let digits = num.toString().split('')
    let squares = digits.map(x => x * x)
    let newNum = squares.join('')
    console.log(newNum)
    return newNum;
  }

  squareDigits(9119)
  squareDigits(765)
  squareDigits(2024)