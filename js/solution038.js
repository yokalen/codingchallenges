//param
//number

//return 
//number without any zeros at the end

//exmple
// 1450 => 145
//96000 => 96
//1050 => 105
//-1000 => -1

//psuedo code
//if the last digit is 0, remove it and return 

function noBoringZeros(n) {
    while(n % 10 === 0 && n != 0){
        n / 10
    }
    return n
}