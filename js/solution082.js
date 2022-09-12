/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

// first try
// function capSentence(text) {
//     //create an array of words
//      let arr = text.split(' ')
//      //capitalize the first letter of each word
//     for(let i = 0; i < arr.length; i++){
//       let cap = arr[i][0].toUpperCase()
//       arr[i] = arr[i].replace(arr[i][0], cap)
//     }
//     // return as a string
//     return arr.join(' ')
//   }

//forEach
function capSentence(text){
    //create an array of words
    let words = text.toLowerCase().split(' ')
    let capWords = []

    //capitalize the first letter of each word
    words.forEach(word => capWords.push(word[0].toUpperCase() + word.slice(1)))
    return capWords.join(' ')
}