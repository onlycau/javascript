//工厂模式
function createPerson(name, age, job){
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function(){
    console.log(this.name);
  };
  return o;
}
var person1 = createPerson('onlycau', 25, 'idiot')

//构造函数模式
function Person(name, age, job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function(){
    console.log(this.name);
  };
}
var person2 = new Person('onlycau', 25, 'idiot')


console.log(person1 instanceof Object, person2 instanceof Object);
console.log(person1 instanceof createPerson, person2 instanceof Person);
console.log(typeof person1 , typeof person2);
