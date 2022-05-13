//Parameters: speed in km per hour, positive number > 0
//Return: speed in cm per second, rounded down to the integer (km/h * 27.778 = cm/s)
//Example: 1.08 --> 30
//          5 --> 139
//          21 --> 583
//          100.25 --> 2784
//Psuedo code
//function takes in speed in km/hr
//calculates and returns speed in cm/s
/* function cockroachSpeed(s) {
  return Math.floor(s * 27.778)
} */
//refactored
const cockroachSpeed = (s) => Math.floor(s * 27.778)