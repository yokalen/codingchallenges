// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array

//P: array of strings
//R: the first value in the array after it has been sorted alphabetically with *** between each letter
//E: ['cat', 'fish', 'dog'] => c***a***t
//P:
//sort the array alphabetically
//get the first string in the array
//return string with *** between each letter

function twoSort(s) {
    s.sort()
    let firstWord = s[0];
    return firstWord.split('').join('***')
}