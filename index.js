// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
   if (someValue < 42) {
    return 42 - someValue;
   }
   else {
    return someValue - 42;
   }
}
function distanceFromHqInFeet (someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}
function distanceTravelledInFeet (start, destination) {
    if ( destination > start ) {
        return (destination - start) * 264;
    }
    else {
        return (start - destination) * 264;
    }
    }
function calculatesFarePrice (start, destination) {
    let fare = distanceTravelledInFeet (start, destination);
    if (fare <= 400) {
        return 0;        
    } else if ( fare >= 400 && fare <= 2000 ) {
        return (fare - 400 ) * .02;
    }
    else if ( fare > 2000 && fare < 2500) {
        return 25;
    }
    else {
        return "cannot travel that far";
    } 
}