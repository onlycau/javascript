function factorial(num){
  if (num <= 1){
    return 1;
  }
  else{
    return num * arguments.callee(num-1)
  }
}

console.log(factorial(5));

//f函数代表指向其函数实体的指针 但生存周期仅在这个声明内部
var factorial2 = (function f(num){
  if (num <= 1){
    return 1;
  }
  else{
    return num * f(num - 1);
  }
});

console.log(typeof(f), typeof(factorial2));
f = null;

console.log(factorial(8));