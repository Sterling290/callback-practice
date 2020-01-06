const pourCoffeeIntoMug = require('./pourCoffeeIntoMug');
const drink = require('./drink');

module.exports = function getMug() {
   setTimeout(() => {
     console.log('getting mug from cabinet'),pourCoffeeIntoMug(),drink();

   }, 1000);
}
