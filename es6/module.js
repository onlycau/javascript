/*
* ES6 的模块自动开启严格模式，不管你有没有在模块头部加上 use strict;。
* 模块中可以导入和导出各种类型的变量，如函数，对象，字符串，数字，布尔值，类等。
* 每个模块都有自己的上下文，每一个模块内声明的变量都是局部变量，不会污染全局作用域。
* 每一个模块只加载一次（是单例的）， 若再去加载同目录下同文件，直接从内存中读取。
*/

// export and import
/*
* 模块导入导出各种类型的变量
* 导出的函数声明与类声明必须要有名称
* expert命令可以出现在模块的任何位置 但必须处于模块顶层
* import命令会提升到整个模块的头部，首先执行
*/

/* ---import[module_test.js]---*/
// import {myName, myAge, myFn, myClass} from './module_test.js'
// console.log(myFn() + myClass.text)

