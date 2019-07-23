//async function name([param[,pram[,...param]]]){statements}
//async 返回一个Promise对象 可以使用方法添加回调函数

async function hiAsync(){
  return 'hiAsync'
}
console.log(hiAsync())
hiAsync().then(v=>{
  console.log(v)
})
//await
function testAwait(){
   return new Promise((resolve) => {
       setTimeout(function(){
          console.log("testAwait");
          resolve();
       }, 1000);
   });
}
 
async function helloAsync(){
   await function(){
    console.log('test')
    return '..'
   };
   await testAwait();
   console.log("helloAsync");
 }
console.log('mid')
helloAsync();