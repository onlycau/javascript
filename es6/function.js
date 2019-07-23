//只有在未传递参数时，或者参数为undefned时，才会使用默认参数，null值被认为是有效的值传递
function fn(name,age=22){
  console.log(name + ',' + age);
}
fn('lisi',null)

//不定参数 有...加上一个具名参数标识符组成，具名参数放在最后且有且只有一个不定参数

function f(...values){
  console.log(values.length + ' ' + values[8])
}
f(2,3,4,5)

//箭头函数

//没有参数或者多个参数要用() 函数体有多行语句 用{} 包括起来表示代码块，返回对象 要用()将对象包裹起来
//没有this super arguments new.target绑定
//箭头函数中的this 是定义函数时的对象，而不是使用函数时的对象
var Person = {
  'age':20,
  'sayHello':function(){
    setTimeout(()=>{
      console.log(this.age);
    });
  },
  'sayHello2':()=>{
    console.log(this.age)
  }
};
var age = 18;
Person.sayHello();
Person.sayHello2();