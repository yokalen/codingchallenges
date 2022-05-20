// When provided with a number between 0-9, return it in words.

// Input :: 1
// Output :: "One".

//P: num 0-9
//R: word representing the num
//E: 0 => 'Zero'
//   4 => 'Four'
//   7 => 'Seven'
//   2 => 'Two'
//P: 
// whatever number is provided as a parameter, return it as a string word

function switchItUp(number){
    switch(number){
        case 0: return 'Zero';
        case 1: return 'One';
        case 2: return 'Two';
        case 3: return 'Three';
        case 4: return 'Four';
        case 5: return 'Five';
        case 6: return 'Six';
        case 7: return 'Seven';   
        case 8: return 'Eight';
        case 9: return 'Nine';
        default: return 'Sir, we need a digit from 0 to 9';
    }
}

//testing 
// console.log(switchItUp(0))
// console.log(switchItUp(1))
// console.log(switchItUp(2))
// console.log(switchItUp(3))
// console.log(switchItUp(4))
// console.log(switchItUp(5))
// console.log(switchItUp(6))
// console.log(switchItUp(7))
// console.log(switchItUp(8))
// console.log(switchItUp(9))
// console.log(switchItUp(10))
