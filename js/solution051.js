//params
// wall length and pixel length in mm

//return true if the pixel art will fit perfectly on the wall, ie if wall size / pixel size = 0

//example
//4050, 27 => true
//4066, 27 => false

// function isDivisible(wallLength, pixelSize){
//     return wallLength % pixelSize === 0;
// }

const isDivisible = (wallLength, pixelSize) => wallLength % pixelSize === 0;