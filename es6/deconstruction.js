//基本
let [a, b, c,] = [1, 2, 3]
console.log(a, b, c)

//嵌套
let [d, [[e], f]] = [1, [[2], 3]]
console.log(d, e, f)

//忽略
let[g,,h] = [4, 5, 6]
console.log(g, h)

//不完全解构
let [i=1, j] = []
console.log(i, j)

//剩余运算符
let [k, ...l] = 'hello'
console.log(k, l)

//可遍历对象皆可进行解构赋值

//匹配结果是undefined 会触发默认值作为返回结果
let[m=7, n=m] = [8]
console.log(m, n)

//对象模型的解构 
//pass