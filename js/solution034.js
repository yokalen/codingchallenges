//params
//three numbers: width, height, depth

//return
//the total surface area and volume of a box as an array [area, volume]

//example
// 4, 2, 6 => [88, 48]
// 10, 10, 10 => [600, 1000]

// a = 2 * width + 2 * height + 2 * depth
// v = width * height * depth
// return [a, v]

// function getSize(width, height, depth){
//     let a = 2 * width * height + 2 * height * depth + 2 * depth * width
//     let v = width * height * depth
//     let arr = [a, v]
//     return arr;
// }

const getSize = (width, height, depth) => [2 * width * height + 2 * height * depth + 2 * depth * width, width * height * depth]
