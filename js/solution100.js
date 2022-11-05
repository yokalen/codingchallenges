//two arrays of strings, a1 a2
//sorted array r in  alphabetical order of the strings in a1 which are substrings of struing of a2
//example a1 = ["arp", "live", "strong"], a2 = ["lively", "alive", "harp", "sharp", "armstrong"] => ["arp", "live", "strong"]
//a1 = ["tarp", "mice", "bull"], a2 = ["lively", "alive", "harp", "sharp", "armstrong"] => []

function inArray(a1,a2){
    let str = a2.join('')
    return a1.filter(s => str.indexOf(s) !== -1).sort()
  }

console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]), ["arp", "live", "strong"])