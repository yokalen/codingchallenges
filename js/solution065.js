//params 
//an array of arrays that contain strings of letters

//return
//a string where all the 0th index letters create a word, followed by all the 1st index letters together to create a second word, etc.

//example => [['J','L','L','M']
//           ,['u','i','i','a']
//           ,['s','v','f','n']
//           ,['t','e','e','']]
// => "Just Live Life Man"

//pseudo code
// return a string of all the 0 index letters, plus a string of all the 1st index letters, and so on for each index string for all arrays

//first try
// function arrAdder(arr) {
//     let a = ''
//     let b = ''
//     let c = ''
//     let d = ''
//     for(let i = 0; i < arr.length; i++){
//         a += arr[i][0]
//         b += arr[i][1]
//         c += arr[i][2]
//         d += arr[i][3] 
//     }
//     return a + ' ' + b +  ' ' + c + ' ' + d
// }