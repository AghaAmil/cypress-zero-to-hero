/*

Concatenation & Interpolation

 */

let price = 50;
let itemName = 'Cup';

// concatenation
let productDescription = 'The price of the ' + itemName + 's are: ' + price + ' Dollars';

// interpolation
let productDescription_2 = `The price of the ${itemName}s are: ${price} Dollars`;

console.log(productDescription);
console.log(productDescription_2);