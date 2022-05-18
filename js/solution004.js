//PREP
//Parameters: string
//Return: string in which each character is repeated once
//Example: "String" => "SSttrriinngg"
//          "Hello World" => "HHeelllloo  WWoorrlldd"
//          "1234!_ " => "11223344!!__  "
//Psuedo code
//take string 
//duplicate each character
//return string with double characters
function doubleChar(str) {
    return str.split('').map( x => (x + x) ).join('')
}