var Bee = function() {
  // Call the Grub superclass
  Grub.call(this);
  // Add age property with value 5
  this.age = 5;
  // Add color property with value yellow
  this.color = 'yellow';
  // Add job property set to an empty object
  this.job = 'keep on growing';

};

// Set Bee prototype to Grub prototype
Bee.prototype = Object.create(Grub.prototype);
// Set constructor to Bee
Bee.prototype.constructor = Bee;