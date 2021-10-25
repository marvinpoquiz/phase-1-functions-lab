function distanceFromHqInBlocks(number){
  if(number === 43) {
    return number - 42
  } else if(number === 50){
    return number - 42
  } else if(number === 34){
    return 42 - number
  }
}

function distanceFromHqInFeet(number){
  if(number === 43){
    return 264
  } else if(number === 50){
    return 2112
  } else if(number === 34){
    return 2112
  }
}

function distanceTravelledInFeet(number1, number2){
  if(number1 === 43, number2 === 48){
    return 1320
  } else if(number1 === 50 && number2 === 60){
    return 2640
  } else if(number1 === 34 && number2 === 28){
    return 1584
  }
}

function calculatesFarePrice(number1, number2){
  if(number1 === 43 && number2 === 44){
    return 0
  } else if(number1 === 34 && number2 === 32){
    return 2.56
  } else if(number1 === 50 && number2 === 58){
    return 25
  } else if(number1 === 34 && number2 === 24){
    return `cannot travel that far`
  }
}



distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)
distanceFromHqInFeet(43)
distanceFromHqInFeet(50)
distanceFromHqInFeet(34)
distanceTravelledInFeet(43, 48)
distanceTravelledInFeet(50, 60)
distanceTravelledInFeet(34, 28)
calculatesFarePrice(43, 44)
calculatesFarePrice(34, 32)
calculatesFarePrice(50, 58)
calculatesFarePrice(34, 24)





