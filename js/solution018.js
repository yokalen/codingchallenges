//P: two integers (a, b, where a < b) 
//R: an array of all integers between the input parameters, including them.
//E
// a = 1
// b = 4
// --> [1, 2, 3, 4]
//P:
//create an array
//starting at a, push every num to an array until you get to b
function between(a, b) {
  let arr = []
  for(let i = a; i <= b; i++){
    arr.push(i)
  }
  return arr;
}

