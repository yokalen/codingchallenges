//P: An integer from 1 to 10
//R: multiplication table for the number, 1 to 10, string
//E: for number === 5
//   1 * 5 = 5
//   2 * 5 = 10
//   3 * 5 = 15
//   4 * 5 = 20
//   5 * 5 = 25
//   6 * 5 = 30
//   7 * 5 = 35
//   8 * 5 = 40
//   9 * 5 = 45
//   10 * 5 = 50
//P: return multiplation table

function multiTable(n){
    let result =  '1 * ' + n + ' = ' + n + '\n2 * ' + n + ' = ' + 2*n + '\n3 * ' + n + ' = ' + 3*n + '\n4 * ' + n + ' = ' + 4*n + '\n5 * ' + n + ' = ' + 5*n + '\n6 * ' + n + ' = ' + 6*n + '\n7 * ' + n + ' = ' + 7*n + '\n8 * ' + n + ' = ' + 8*n + '\n9 * ' + n + ' = ' + 9*n + '\n10 * ' + n + ' = ' + 10*n
    return result
}