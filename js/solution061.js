//params
//a string of words

//return
//the string with the order of the words reversed 

//example
//"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

//psudeo code
//split the words into an array
//reverse the order of the array

function reverseWords(str){
    return str.split(' ').reverse().join(' '); 
}