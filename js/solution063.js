//params
//size, always a positive whole number

//return
//a string of alternating '1' and '0' that has a length of size

//example
//6 => '101010'
//4 => '1010'
//12 => '101010101010'

//psuedo code
//if size % 2 = 0, return '10' size/2 number of times
//if size % 2 != 0, return '10' size/2 number of times + 1

function stringy(size) {
    let str = '10'
    return str.repeat(size).slice(0,size);
}