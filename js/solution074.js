//array of player objects, and a number to choose a player

//return the name of the chosen player, player.name

//([a,b,c,d], 1) => a.name
//([a,b,c,d], 5) => a.name
//([a,b,c,d], 4) => d.name

//count the players one by one around in a circle until you reach the given number and get the player's name

//first try
const duckDuckGoose = (players, goose) => players.length <= goose ? players[(goose - 1)][name] : players[(players.length % goose - 1)];

