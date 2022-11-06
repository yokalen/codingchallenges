//two arrays of strings, a1 a2
//sorted array r in  alphabetical order of the strings in a1 which are substrings of struing of a2
//example a1 = ["arp", "live", "strong"], a2 = ["lively", "alive", "harp", "sharp", "armstrong"] => ["arp", "live", "strong"]
//a1 = ["tarp", "mice", "bull"], a2 = ["lively", "alive", "harp", "sharp", "armstrong"] => []

function inArray(a1,a2){
    //if each word in a1 is a substring of a word in a2, push that word to a new arry
    let a3 = []
    for(let i = 0; i < a1.length; i++){
        for(let j = 0; j < a2.length; j++){
            //check for duplicates
            if(a2[j].search(a1[i])){
                a3.push(a1[i]) 
            }
        }
    }
    //sort the new array
    return a3.sort()
  }

console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]), ["arp", "live", "strong"])