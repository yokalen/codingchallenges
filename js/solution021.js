//P: string of words
//R: length of the longest word, as a number
//E: "The dog will go outside" => 7
//   "My phone is charging" => 8
//P:
//split the string into the different words
//check each word to see what the length is
//return the length of the longest word

function findLongest(str){
  
    let words = str.split(" ");
    let longest = 0;
  
    for (let i = 0; i < words.length; i++){
        if (words[i].length > longest) {
            longest = words[i].length
        }
    }
    return longest
}