"user strict";//严格模式
//单行注释
/*
*这是一个多行
*（块级）注释
*/
//typeof 是一个操作符 而不是函数，所以参数前面可以使用圆括号。
function  myFunction(){
    return 0;
}
var message = "some string";
var myNull = null
console.log(typeof(message));
console.log(typeof (haha));
console.log(typeof 95);
console.log(typeof myFunction);
console.log(typeof myNull);//对象包括null返回 object 初始化对象null 区别于未定义
console.log(null == undefined);

//Boolean
console.log(Boolean('  '));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));

//number
console.log(0.1 + 0.2);
console.log(-5e555);
console.log(5e-555);
console.log((3 % 0) === (3 % 0));//NaN不等
console.log(Number.MAX_VALUE);

//string
console.log(String(null));
console.log(String(undefined));
o = new Object()
console.log(String(o));