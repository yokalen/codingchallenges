//p
//array of weekdays, each weekday has an array of numbers for how many stairs were climbed on that day throughout the year
//r
//eatimate of how many stairs will be climbed in 20 years

function stairsIn20(s){
    return s.reduce((acc, c) => acc + c.reduce((acc, n) => acc + n, 0), 0) * 20;
  }

