// This solution returns a literal,
// instead of using the accumulator pattern

/**
 * Generate a band name based on the user's clothing color
 * and the last food they ate
 * 
 * @param {string} clothingColor 
 * @param {string} lastFoodEaten
 * 
 * @return {string} bandName
 * 
 * @example
 * 
 *  generateBandName('RED', 'cookies')
 */
// const bandNames = [];

// function generateBandName(clothingColor, lastFoodEaten) {
//   // format the input data and store it for later

//   const color = clothingColor[0].toUpperCase() + clothingColor.substr(1).toLowerCase();
//   const food = lastFoodEaten[0].toUpperCase() + lastFoodEaten.substr(1).toLowerCase();
//   bandNames.push(`The ${color} ${food}`);
//   // use the formatted inputs to build the return
//   return `The ${color} ${food}!`;

// }

// console.log(generateBandName('blACK', 'spAGhetti'));
// console.log(generateBandName('purple', 'assholes'))
// console.log(generateBandName('pink', 'elephants'))
// console.log(generateBandName('yeLLOw', 'tORTELLIni'))
// console.log(bandNames);


//exercise 3 : call the same function twice , same result  
//const bandNames = [];
function generateBandName(clothingColor, lastFoodEaten) {
  // format the input data and store it for later

  const color = clothingColor[0].toUpperCase() + clothingColor.substr(1).toLowerCase();
  const food = lastFoodEaten[0].toUpperCase() + lastFoodEaten.substr(1).toLowerCase();
  bandNames.push(`The ${color} ${food}`);
  // use the formatted inputs to build the return
  return `The ${color} ${food}!`;

}

console.log(generateBandName('blACK', 'spAGhetti'));
console.log(generateBandName('purple', 'assholes'))
console.log(generateBandName('pink', 'elephants'))
console.log(generateBandName('yeLLOw', 'tORTELLIni'))
console.log(bandNames);