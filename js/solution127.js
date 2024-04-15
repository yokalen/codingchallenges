//array of friends
//array of best friends - 4 letter names
//['Ryan', 'Gary', 'Matthew', 'Michael'] => ['Ryan', 'Gary']
//filter the friends array to best friends
function friend(friends){
    let myBestFriends = friends.filter(x => x.length === 4)
    return myBestFriends;
  }