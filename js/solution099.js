// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 

//string of words
//array of words sorted by last letter in each word
//'man i need a taxi up to ubud' => ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
//'what time are we climbing up the volcano' => ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
//'take me to semynak' => ['take', 'me', 'semynak', 'to']

function last(str){
    //split into words
    //make a new empty array 
    //look at each word and put it on the front of back depending on the order of the last letter
    let words = str.split(' ')
    let result = words.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
    return result;
}

console.log(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'])
console.log(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what'])
console.log(last('take me to semynak'), ['take', 'me', 'semynak', 'to'])