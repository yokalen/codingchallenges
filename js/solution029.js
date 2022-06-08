//P: array with all "sheep" strings except one that is "wolf"
//R: if wolf is the closest animal to you, return "Pls go away and stop eating my sheep", otherwise return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in line where 1 is the last sheep in the array and it counts up toward the 0 index.
//E: ["sheep", "sheep", "sheep", "wolf", "sheep"] => "Oi! Sheep number 1! You are about to be eaten by a wolf!"
//   ["sheep", "sheep", "wolf"] => "Pls go away and stop eating my sheep"
//P:
//if the wolf is in the last position of the array, reutrn "Pls go away and stop eating my sheep"
//else for sheep number = (array.length - 1) - the "wolf" index return "Oi! Sheep number N! You are about to be eaten by a wolf!"

//first solution
// function warnTheSheep(queue) {
//     if(queue[queue.length - 1] === "wolf"){
//         return "Pls go away and stop eating my sheep";
//     }else{
//         for(let i = 0; i < queue.length; i++){
//             if(queue[i] === "wolf"){
//                 return "Oi! Sheep number " + (queue.length - 1 - i) + "! You are about to be eaten by a wolf!"
//             }
//         }
//     }
// }

//second solution
const warnTheSheep = queue => queue.reverse()[0] === 'wolf' ? "Pls go away and stop eating my sheep" : "Oi! Sheep number " + queue.indexOf('wolf') + "! You are about to be eaten by a wolf!";