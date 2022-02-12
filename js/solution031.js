//Parameters: array and a number n
//Return: the first n elements from the array
//Example: [0, 1, 2, 3, 5, 8, 13], 3) => [0, 1, 2]

//return a piece of the array with the number of elements equal to n

function take(arr, n) {
  return arr.slice(0, n);
}