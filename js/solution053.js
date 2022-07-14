//params
//a string s
//return
//true if it's a valid string integer or floating number, otherwise false
//examples
//"3" => true
//"-3.23" => true
//"3-4" => false
//"zero" => false

function isDigit(s) {
 return parseFloat(s) == (s);
}