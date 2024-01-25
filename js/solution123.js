// Complete the solution so that the function will break up camel casing, using a space between words.
// "camelCasing" => "camel Casing" // "identifier" => "identifier" // "" => ""
// split the string into an array of letters
// map the array and if the letter is capitalized, add a space in front of it
// join the array back into a string

function solution(string) {
    let solution = string
                    .split("")
                    .map(el => el !== el.toLowerCase() ? el = " " + el : el)
                    .join("")
    return solution;
  }

  console.log(solution("camelCasing"), "camel Casing")
  console.log(solution("identifier"), "identifier")
  console.log(solution(""), "")