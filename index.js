// Code your solution in this file!
function distanceFromHqInBlocks (blocks = 50) {
    if (blocks < 42) {
        return(42-blocks);
      }
      else {
      return(blocks-42);
    }
}

function distanceFromHqInFeet (feet = 50) {
    if (feet < 42) {
        return(42-feet)*264;
      }
      else {
      return(feet-42)*264;
    }   
}

function distanceTravelledInFeet (x, y) {
 if (y > x) {
    return (y-x)*264;
 }
 else {
    return (x-y)*264;
 }
}

function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet (start, destination);
    if (distance <= 400) {
       return 0;
    }
    else if (distance >=400 && distance <= 2000) {
        return (distance-400)*0.02;
    }
    else if (distance >= 2000 && distance <= 2500) {
        return 25;
    }
    else (distance > 2500) 
      return "cannot travel that far";
    }


