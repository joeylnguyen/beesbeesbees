var ForagerBee = function() {
  // Call Bee
  Bee.call(this);
  // Add age property with value of 10
  this.age = 10;
  // Add job property with value of find pollen
  this.job = 'find pollen';
  // Add canFly property with value of true
  this.canFly = true;
  // Add treasureChest property that is set to []
  this.treasureChest = [];

};


// Set prototype to Bee prototype
ForagerBee.prototype = Object.create(Bee.prototype);
// Set constructor function to itself
ForagerBee.prototype.constructor = ForagerBee;
// Add forage method that adds treasure to the treasureChest
ForagerBee.prototype.forage = function(treasure) {
  // Push treasure to treasureChest
  this.treasureChest.push(treasure);
 };