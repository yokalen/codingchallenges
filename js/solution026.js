//P: two true or false expressions
//R: true if only one of the expressions is true, otherwise false if neither or both are true
//E: false, false => false
//   true, false => true
//   false, true => true
//   true, true => false
//P: 
//return true if the frist boolean does not match the second 

function xor(a, b) {
    return a != b;
}