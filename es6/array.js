//创建
console.log(Array.of(1,2,3,5))

//Array.from(arrayLike[,mapFn[,thisArg]])
let map = {
  do:function(n){
    return n * 2;
  }
}
let arrayLike = [3, 6, 9]
console.log(Array.from(arrayLike,function(n){
  return this.do(n);
},map));

//类数组对象必须含有length属性 且元素属性名必须是数值或者可转换为数值的字符
let arr = Array.from({
  0:'1',
  1:'2',
  2:3,
  length: 3
})
console.log(arr)

//转换可迭代对象 set 字符串
//扩展的方法
console.log(arr.find(item=>item>1))
console.log(arr.findIndex(item=>item>1))
console.log(arr.fill(0,1,10))
//copyWithin() entries keys values includes

//嵌套数组转一维数组 flat() flatMap()

//数组缓冲区 pass

//扩展运算符
console.log(...[1,2],...[3,4])