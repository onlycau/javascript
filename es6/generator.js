//生成器 function* 函数内有yield

function* func(){
  console.log('a');
  yield '1';
  console.log('b');
  yield '2';
  console.log('c');
  return '3';
}
f = func()
console.log(f[Symbol.iterator]()===f)
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f[Symbol.iterator]())

//next()传参
function* sendParameter(){
    console.log("start");
    var x = yield '2';
    console.log("one:" + x);
    var y = yield '3';
    console.log("two:" + y);
    console.log("total:" + (x + y));
}
var sendp1 = sendParameter();
for(let n of [1,2,3]){
  console.log(sendp1.next(2))
}

//return throw
var g = function* () {
  try {
    yield;
  } catch (e) {
    console.log('catch inner', e);
  }
};
 
var i = g();
i.next();
 
try {
  i.throw('a');
  i.throw('b');
} catch (e) {
  console.log('catch outside', e);
}

//使用场景 实现iterator Reflect.ownKeys()返回对象的所有属性 包括不可枚举属性 例如Symbol
function* objectEntries(obj) {
    const propKeys = Reflect.ownKeys(obj);
    for (const propKey of propKeys) {
        yield [propKey, obj[propKey]];
    }
}
 
const jane = { first: 'Jane', last: 'Doe' };
for (const [key,value] of objectEntries(jane)) {
    console.log(`${key}: ${value}`);
}