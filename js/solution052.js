//params
//one letter a-z

//return
//position of the letter in the alphabet

//example
//a => 1
//z => 26
//e => 5

function position(letter){
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    return alphabet.indexOf(letter) + 1;
}