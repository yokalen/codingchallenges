//params
// a string and a number

//return
//the string repeated n number of times

//example
//"Hi", 2 => "HiHi"
//1234, 5 => "Not a string"

var repeatIt = function(str, n) {
    let result = '';
    if(typeof str === 'string'){
      for(let i = 1; i <= n; i++){
        result += str
      }
      return result;
    }else{
      return 'Not a string'
    }
    }