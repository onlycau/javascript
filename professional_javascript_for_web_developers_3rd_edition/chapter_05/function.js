//函数名实际上也是一个指向函数对象的指针，不会与某个函数绑定。

//作为值的函数

function callSomeFunction(someFunction, someArgument){
  return someFunction(someArgument);
}

function add10(num){
  return num+10;
}
console.log(callSomeFunction(add10, 10));
function getGreeting(name){
  return 'hello, ' + name;
}
console.log(callSomeFunction(getGreeting, 'nicholas'));

//函数内部属性

function factorial(num){
  if (num<=1){
    return 1;
  }else{
    return num * arguments.callee(num-1)
  }
}

//函数属性和方法
function sum(num1, num2){
  return num1+num2;
}
function callSum1(num1,num2){
  return sum.apply(this,arguments);
}
function callSum2(num1,num2){
  return sum.apply(this,[num1,num2]);
}
//传递给函数的参数必须逐个列举出来
function callSum(num1,num2){
  return sum.call(this,num1,num2);
}

console.log(callSum2(3,5),callSum1(3,5));
console.log(callSum(3,5));

//扩充函数的作用域
console.color = 'red';
var o = {color:'blue'};

function sayColor(){
  console.log(this.color);
}
sayColor();
sayColor.call(this);
sayColor.call(console);
sayColor.call(o);

//bind()会创建一个函数的实例，其this值为传给bind函数的值

var objectSaycolor = sayColor.bind(o);
objectSaycolor();