//params
//one letter a-z

//return
//"Position of alphabet: (position of the letter in the alphabet)"

//example
//a => Position of alphabet: 1
//z => Position of alphabet: 26
//e => Position of alphabet: 5

function position(letter){
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    return "Position of alphabet: " + (alphabet.indexOf(letter) + 1);
}