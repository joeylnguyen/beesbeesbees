var RetiredForagerBee = function() {
  // Call ForagerBee superclass
  ForagerBee.call(this);
  // Add an age property with value 40
  this.age = 40;
  // Add a job property with value gamble
  this.job = 'gamble';
  // Add a canFly property with value false
  this.canFly = false;
  // Add a color property with value grey
  this.color = 'grey';

};

// Set prototype to ForagerBee prototype
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
// Set constructor to itself
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
// Add a forage method that returns "I am too old, let me play cards isntead"
RetiredForagerBee.prototype.forage = function() {
  return "I am too old, let me play cards instead";
};
// Add gamble method that adds treasure to treasureChest
RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
}