//class关键字定义类 本质是function 它可以看做一个语法糖 让对象原型的写法更加清晰 更像面向对象编程的语法

//匿名
let Example1 = class{
  constructor(a){
    this.a = a;
  }
}
//命名
let Example2 = class Example{
  constructor(a){
    this.a = a;
  }
}

//类声明 不可重复声明 不会被提升 类中方法不需要function关键字 方法间不能加分号
class Example{
  constructor(a){
    this.a = a ;
  }
}

//只有静态方法没有静态属性
class Example3{
  constructor(c,d){
    this.c = c;
    this.d = d;
  }
  a(){
    return 'a'
  }
}
let ex =new Example3(4,5)
console.log(Example3===Example3.prototype.constructor)
Example3.prototype.a = function(){
  return 'b'
}

ex.__proto__.sub = function(){
  return this.c - this.d;
}
console.log(ex.sub())

//decorator装饰器  (python) pass
// function testable(target){
//   target.isTestable = true;
// };

// @testable
// class ExampleTest{}
// console.log(ExampleTest.isTestable)

//封装与继承
/*
class Person{
  constructor(age,name){
    this.age = age;
    this.name = name;
  }
  get age(){
    console.log('getter');
    return this.a;
  }
  set age(age){
    console.log('setter');
    this.age = age;
  }
}
let person = new Person(15,'zhangsan');
*/
class Person{
  constructor(age,name){
    this.age = age;
    this.name = name;
  }
  test(){
    return 0;
  }
  get age(){
    console.log('getter');
    return this._age;
  }
  set age(age){
    console.log('setter');
    this._age = age;
  }
}
let person = new Person(15,'zhangsan');
console.log(person._age)

//继承 getter setter 必须同级出现 通过extends实现类的继承 子类constructor必须有super 且出现在thi之前
class Son extends Person{
  constructor(){
    super();
    console.log(super.test())
  }
}
let son = new Son(18,'lisi')
console.log(son.test())