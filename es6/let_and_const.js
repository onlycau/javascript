'use strict';
//let声明的变量只在let命令所在的代码块内有效。
// function test1(){
//   let a = 0;
// }
// console.log(a)

//let只能声明一次 var可以声明多次
// let a = 1;
// let a = 2;
// var b = 3;
// var b = 4;

//for循环计数器时候用let 作为局部变量 js内部会记住前一个循环的值
for (var i = 0; i < 3; i++){
  setTimeout(function(){
    console.log(i)
  });
}
for (let j = 0; j < 3; j++){
  setTimeout(function(){
    console.log(j)
  });
}

//let不存在变量提升 var会变量提升
// console.log(a)
// let a = 'a'
// console.log(b)
// var b

//const声明一个只读常量 不许改变 且声明必须初始化

const PI = '3.1415926'
console.log(PI)

//暂时性死区 es6明确规定 代码内如果存在let或const 代码块会对这些命令声明的变量从块的开始形成一个封闭的区域
var P = '3'
if(true){
  console.log(P);
  const P = '3.14'
}

/*
简单类型和复合类型保存值的方式是不同的。是的，对于简单类型（数值 number、字符串 string 、布尔值 boolean）,值就保存在变量指向的那个内存地址，因此 const 声明的简单类型变量等同于常量。而复杂类型（对象 object，数组 array，函数 function），变量指向的内存地址其实是保存了一个指向实际数据的指针，所以 const 只能保证指针是固定的，至于指针指向的数据结构变不变就无法控制了，所以使用 const 声明复杂类型对象时要慎重
 */