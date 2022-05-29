//P: array of strings
//R: the first value in the array after it has been sorted alphabetically with *** between each letter
//E: ['cat', 'fish', 'dog'] => c***a***t
//P:
//sort the array alphabetically
//get the first string in the array
//return string with *** between each letter

// function twoSort(s) {
//     s.sort()
//     let firstWord = s[0];
//     return firstWord.split('').join('***')
// }

//refactored
const twoSort = s => s.sort()[0].split('').join('***')