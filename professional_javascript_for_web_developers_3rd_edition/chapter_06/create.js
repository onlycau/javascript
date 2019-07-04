/*
function Person(name, age, job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function(){
    console.log(this.name);
  };
};
var person1 = new Person('nicholas', 28, 'software engineer');
var person2 = new Person('greg', 27, 'doctor');

// 当作构造函数使用
var person = new Person("Nicholas", 29, "Software Engineer");
person.sayName(); //"Nicholas"
// 作为普通函数调用
Person("Greg", 27, "Doctor"); // 添加到 window
// 在另一个对象的作用域中调用
var o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
o.sayName(); //"Kristen"

console.log('原型模式：');
function Person2(){

}
  Person2.prototype.name = 'Nicholas';
  Person2.prototype.age = 29;
  Person2.prototype.job = 'doctor';
  Person2.prototype.sayName = function(){
    console.log(this.name);
  };
var person1 = new Person2();
person1.sayName();
*/
//组合使用构造函数模式和原型模式

function Person(name, age, job){
this.name = name;
this.age = age;
this.job = job;
this.friends = ["Shelby", "Court"];
}
2
3
4
Person.prototype = {
constructor : Person,
sayName : function(){
console.log((this.name));
}
}
5
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
person1.friends.push("Van");
console.log((person1.friends));
//"Shelby,Count,Van"
console.log((person2.friends));
//"Shelby,Count"
console.log((person1.friends === person2.friends));
//false
console.log((person1.sayName === person2.sayName));
//true