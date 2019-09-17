//数据类型 Number String Boolean Object null undefined Symbol

//基本用法
let sy = Symbol('hello')
console.log(sy, typeof(sy), sy === Symbol('hello'))

//作为属性名
let syObject = {}
syObject[sy] = 'hi'
console.log(syObject)

//
let yellow2 = Symbol('yellow')
let yellow = Symbol.for('yellow')
let yellow1 = Symbol.for('yellow')
console.log(yellow === yellow1, yellow === yellow2)

console.log(Symbol.keyFor(yellow1))