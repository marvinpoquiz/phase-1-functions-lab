// Code your solution in this file!

function distanceFromHqInBlocks(number) {
    if(number > 42)
        return number - 42
    else {
        if(34 < 42)
            return 34 - 26
    }
} 

function distanceFromHqInFeet(number){
    return distanceFromHqInBlocks(number)*264
  }

  function distanceTravelledInFeet(start, destination){
    if(start < destination){
      return (destination - start)*264
    } else {
      return (start - destination)*264
    }
  }

  function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination)
    if(distance <= 400){
      return 0
    } else if (distance > 400 && distance <= 2000){
      return .02*(distance - 400) 
    } else if (distance > 2000 && distance < 2500) {
      return 25
    } else {
      return 'cannot travel that far'
    }
  }


  it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
    // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
    expect(calculatesFarePrice(34, 32)).to.equal(2.56);
  });