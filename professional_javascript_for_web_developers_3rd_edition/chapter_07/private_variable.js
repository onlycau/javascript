function Moobject(){
  var provateVariable = 10;
  function provateFunction(){
    return false;
  }
  this.publicMethod = function(){
    provateVariable++;
    return provateFunction();
  };
}

function Person(name){
  this.getName = function(){
    return name;
  };
  this.setName = function(value){
    name =value;
  };
}

var person = new Person('Nicholas');
console.log(person.getName());

//静态私有变量
(function(){

  var name ='';
  Person2 = function(value){
    name = value;
  };
  Person2.prototype.getName = function(){
    return name;
  };
  Person2.prototype.setName = function (value){
    name = value;
  };
})();
var person1 = new Person2('nicholas');
console.log(person1.getName(), person1.setName('greg'), person1.getName());

var person2 = new Person2('michel');
console.log(person1.getName(), person2.getName());