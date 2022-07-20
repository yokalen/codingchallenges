//params
//the amount of a bill in dollars and cents, and the rating of the service quality (terrible, poor, good, great, or excellent)
//return
//amount of tip based on quality of service, rounded to the nearest dollar: terrible 0%, poor 5%, good 10%, great 15%, excellent 20%, and return "Rating not recognised" if an unrecognized rating is passed in 
//psuedo code
//multiply the amount by the tip amount based on the rating, round up and return

function calculateTip(amount, rating) {
    let tip;
    rating = rating.toLowerCase();
    if(rating === 'terrible'){
        tip = 0;
    }else if(rating === 'poor'){
        tip = amount * .05;
    }else if(rating === 'good'){
        tip = amount * .1;
    }else if(rating === 'great'){
        tip = amount * .15;
    }else if(rating === 'excellent'){
        tip = amount * .2;
    }else{
        tip = "Rating not recognised"
    }
    return Math.ceil(tip) || tip;
}