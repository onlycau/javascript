/*
Iterator
Iterator 是 ES6 引入的一种新的遍历机制，迭代器有两个核心概念：

迭代器是一个统一的接口，它的作用是使各种数据结构可被便捷的访问，它是通过一个键为Symbol.iterator 的方法来实现。
迭代器是用于遍历数据结构元素的指针（如数据库中的游标）
 */

// 迭代过程
const items = [1, 2, 3];
const it = items[Symbol.iterator]();
console.log(it.next().value)
console.log(it.next().done)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().done)

//可迭代的值 即实现.[Symbol.iterator]()方法的对象 Array String Map Set Dom
//for of
const arrayLike = {length:2, 0:'a',1:'b'}
/*for (let item of arrayLike){
  console.log(item)
}*/
for (let item of Array.from(arrayLike)){
  console.log(item)
}
// let 和const 作用域在迭代的内部 var作用于全局