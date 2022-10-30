//a sentance, a word in the sentence, and a replacement for that word
//return the sentence with the original word replaced, matching the casing of the original word
//example
//searchReplace("He is Sleeping on the couch", "Sleeping", "sitting") => "He is Sitting on the couch"

function searchReplace(sentence, word, replacement){
    //make sure the word and the replacement word are the same case
    if(word[0] === word[0].toUpperCase()){
        replacement = replacement[0].toUpperCase() + replacement.slice(1)
    }
    return sentence.replace(word, replacement)
}

console.log(searchReplace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is Sitting on the couch")