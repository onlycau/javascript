//父有一个getFatherValue方法 
function Father(){
  this.property = true;
}
Father.prototype.getFatherValue = function(){
  return this.property;
};
function Son(){
  this.sonproperty = false;
}
//继承了父
Son.prototype = new Father();
//先继承再创建子的原型方法 不然子的原型方法会被重写为父
Son.prototype.getSonValue = function(){
  return this.sonproperty;
};
//Son的一个实例 也可以说是继承了Son
var instance = new Son();
console.log(instance.getFatherValue());

//借用构造函数/伪造对象/经典继承
function Father2(){
  this.colors = ['red', 'blue', 'greedn']
}
function Son2(){
  //只借用了构造函数 没有继承原型链 每个实例的属性是重新构造的
  Father2.call(this)
}
var instance1 = new Son2();
instance1.colors.push('black');
console.log(instance1.colors);
var instance2 = new Son2();
console.log(instance2.colors);

//组合继承
function Father3(name){
  this.name = name;
  this.colors = ['red','blue']
};
//原型链中的方法供继承
Father3.prototype.sayName = function(){
  console.log(this.name);
};
function Son3(name,age){
  Father3.call(this,name);
  this.age = age;
}
Son3.prototype = new Father3();
Son3.prototype.constructor = Son3;
Son3.prototype.sayAge = function(){
  console.log(this.age);
}
var instance3 = new Son3('nicholas',22);

instance3.colors.push('black');
var instance4 = new Son3('greg', 99);
console.log(instance3.colors, instance4.colors);
instance3.sayName();
instance4.sayName();
instance4.sayAge();

//原型式继承
var person = {
  name:'nicholas',
  friends:['shelby','court','van']
};
var anotherPerson = Object.create(person);
anotherPerson.name = 'lisha';
anotherPerson.friends.push('rob')
var yetAnotherPerson = Object.create(person); 
yetAnotherPerson.name = "Linda"; 
yetAnotherPerson.friends.push("Barbie"); 
console.log(person.friends);
console.log(Object.create(person,{
  name:{
    value:'greg'
  }
}).name);

//寄生式继承类似于构造函数继承

//寄生组合式继承

