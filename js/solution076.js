//takes in an array of strings 
//return a filtered list containing the same elements but with the 'geese' removed
// ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"] => ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
//filter the array to remove the geese

function gooseFilter (birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
   return birds.filter((el,i)=>{
    return el != geese[i]
   })
  };