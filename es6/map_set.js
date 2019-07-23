//map的键可以是任意值 键值有序 size属性 键值对个数

//map的迭代

var myMap = new Map();
myMap.set(0, 'a');
myMap.set(1, 'b');

for (var [key, value] of myMap){
  console.log(key + '=' + value);
}
// keys方法返回一个心得iterator对象 按插入顺序包含了map对象的每个key
console.log(myMap.keys() + myMap.values() + myMap.entries())

// forEach()
myMap.forEach(function(value, key) {
  console.log(key + " = " + value);
}, myMap)

//转换
console.log(Array.from(myMap), new Map(Array.from(myMap)))

//克隆 猜测：只是一个继承了所有属性的新对象
console.log(myMap === new Map(myMap))

//合并 重复的键值 后面的会覆盖前面的
var myMap1 = new Map([[0, 'aaa'],[3, 'ccc']]);
var myMap2 = new Map([...myMap, ...myMap1])
console.log(myMap2)

//set 类似python的集合
let mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(5);
console.log(mySet)
//去重 并集 交集 差集
var a = new Set([1,2,3,4]);
var b = new Set([3,4,5,6]);
var union = new Set([...a,...b]);
var intersect = new Set([...a].filter(x =>b.has(x)));
var difference = new Set([...a].filter(x =>!b.has(x)));
console.log(union, intersect, difference)