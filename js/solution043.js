//p
//two dates, one is the date you were born and the other is the date used to calculate how old you will be at that time
//r
//for dates in the future "You are (number) years old" and for dates in the past "You will be born in (number) years" and if the birth year equals the request year "You were born this very year"
//e
//2012, 2016 => "You are 4 years old."
//1989, 2016 => "You are 27 years old."
//2000, 2090 => "You are 90 years old."
//2000, 1990 => "You will be born in 10 years."
//year of request - year of birth
//if the number is zero
//if the number is negative
//else the number is positive

// function  calculateAge(birthYear, requestYear) {
//     let difference = requestYear - birthYear;
//     if(difference == -1){
//         return "You will be born in 1 year."
//     }else if(difference == 1){
//         return "You are 1 year old."
//     }else if(difference < 0){
//         return "You will be born in " + -(difference) + " years."
//     }else if(difference == 0){
//         return "You were born this very year!"
//     }else{
//         return "You are " + difference + " years old."
//     }
// }

//consolidated
const calculateAge = (birthYear, requestYear) => (requestYear - birthYear) == -1 ? "You will be born in 1 year." : (requestYear - birthYear) == 1 ? "You are 1 year old." : (requestYear - birthYear) < 0 ? "You will be born in " + (birthYear - requestYear) + " years." : birthYear === requestYear ? "You were born this very year!" : "You are " + (requestYear - birthYear) + " years old.";