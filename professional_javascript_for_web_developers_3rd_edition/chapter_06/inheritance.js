function Father(){
  this.property = true;
}
Father.prototype.getFatherValue = function(){
  return this.property;
};
function Son(){
  this.subproperty = false;
};
Son.prototype = new Father();
Son.prototype.getSonValue = function(){
  return this.subproperty;
};
var instance = new Son();
console.log(instance.getFatherValue());