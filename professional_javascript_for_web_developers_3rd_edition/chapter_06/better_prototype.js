//组合使用构造函数模式和原型模式
function Person(name, age, job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.friends = ['shelby', 'court'];
  Person.prototype.sayName = function(){
    console.log(this.name);
  }

}
/*
Person.prototype = {
  constructor:Person,
  sayName:function(){
    console.log(this.name);
  }
}*/
var person1 = new Person("Nicholas", 29, "Software Engineer"); 
var person2 = new Person("Greg", 27, "Doctor"); 
person1.friends.push("Van");
console.log(person1.friends, person2.friends);
console.log(person1.friends === person2.friends, person1.sayName ===person2.sayName);

//动态原型模式
function Person2(name, age, job){ 
  //属性
  this.name = name;
  this.age = age;
  this.job = job;
  //方法
  if (typeof this.sayName != "function"){
    Person2.prototype.sayName = function(){
      console.log(this.name);
    };
  }
}
var friend = new Person2("Nicholas", 29, "Software Engineer"); 
friend.sayName(); 

//寄生构造函数 类似于python的偏函数

//稳妥构造函数模式 
//稳妥对象 没有公共属性 不引用this的对象
