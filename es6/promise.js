// pending fulfiled rejected

const p1 = new Promise(function(resolve,reject){
  resolve('success1');
  resolve('success2');
})
const p2 = new Promise(function(resolve,reject){
  resolve('success3');
  reject('reject');
})
p1.then(function(value){
  console.log(value)
});
p2.then(function(value){
  console.log(value)
})
//tehn接受两个函数作为参数 第一个成功时候的回调 第二个失败时的回调 只会被调用一个
//javascript事件队列的当前运行完成之前 回调函数永远不会被调用
const p = new Promise(function(resolve,reject){
  resolve('success');
});
 
p.then(function(value){
  console.log(value);
});
 
console.log('first');
