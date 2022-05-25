// Terminal game move function

// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
// Example:

// move(3, 6) should equal 15

//P: number 1-6 for starting position, number 1-6 for move
//R: number of move doubled plus start
//E: 3,6 => 15
//   1,4 => 9
//   20, 2 => 24
//   18, 22 => 62
//P:
//double the second parameter and add it to the first
//return that num

// function move (position, roll) {
//   return 2 * roll + position
// }

// Refactored to one line
const move = (position, roll) => 2 * roll + position;