var HoneyMakerBee = function() {
  // Call Bee superclass
  Bee.call(this);
  // Add age property with value 10
  this.age = 10;
  // Add job property with value make honey
  this.job = 'make honey';
  // Add a honeyPot property that is set to 0
  this.honeyPot = 0;
};

// Set the HoneyMakerBee prototype to the Bee prototype
HoneyMakerBee.prototype = Object.create(Bee.prototype);
// Set the HoneyMakerbee constructor to itself
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
// Add makeHoney method that adds to to honeyBee's honeyPot to prototype
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};
// Add giveHoney method that subtracts 1 from honeyBee's honeyPot to prototype
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};