//原型模式
function Person(){
  Person.prototype.name = 'nicholas';
  this.age = 29;
  Person.prototype.job = 'software Engineer';
  Person.prototype.sayName = function(){
    console.log(this.name);
  }
}

var person1 = new Person();
var person2 = new Person();
console.log(person1.sayName == person2.sayName);

//实例中的同名属性会屏蔽原型对象中的属性 因为属性查找是先实例再原型对象，查到到就返回该属性
person1.name = 'greg'
console.log(person1.name, person2.name);
delete person1.name;
console.log(person1.name);
//hasOwnProperty()可以检测属性存在实例还是原型
console.log(person1.hasOwnProperty('name'), person1.hasOwnProperty('age'));//实例true 原型false 其他false
//in  
console.log('name' in person1, 'age' in person1, 'job' in person1);

//for-in循环 
for (var prop in person1){
  console.log(prop);
}
//Object.keys()实例调用只返回实例属性
console.log(Object.keys(person1), Object.keys(Person.prototype));
console.log('all:' + Object.getOwnPropertyNames(Person.prototype));
