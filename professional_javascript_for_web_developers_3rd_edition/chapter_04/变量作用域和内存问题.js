//基本类型值undefined null Boolean Number String
//引用类型值 object 
var obj1 = new Object();
var obj2 = obj1;
obj1.name = 'onlycau';
console.log(obj2.name);

//函数内传递的参数是局部变量 与函数参数变量本身无关
function addTen(num){
    num += 10;
    return num;
}
var count =10;
var result = addTen(count)
console.log(count);

function setName(obj){
    obj.name = 'huihui';
}
setName(obj1);
console.log(obj1.name);

/*函数内对象指向变量所对应的一个对象，但并不是它.
*两者只是指向同一个内存地址的不同指针 参数指向新内存地址后与变量就没有任何瓜葛了.
*/
function setName2(obj){
    obj.name = 'onlycau';
    obj = new Object();
    obj.name = 'greg';
}
setName2(obj1);
console.log(obj1.name);

//查询标示符是由内到外 查询到后立刻返回 不再继续查找
var color = 'blue';
function getColor(){
    return color;
}
console.log(getColor());