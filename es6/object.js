//对象字面量

//属性简写
let age = 12;
let name = 'zhangshan';
let person = {age, name};
console.log(person)

//方法名简写
let person2 = {
  sayHi(){
    console.log('hi')
  }
}
person2.sayHi()

//属性名表达式

let obj = {
  ['he' + 'llo'](){
    return 'hi'
  }
}
console.log(obj.hello())

//拓展运算符 ...取出参数对象所有可遍历属性然后拷贝到当前对象


//合并 自定义的属性在拓展运算符后面，则拓展运算符对象内部同名的属性将被覆盖掉。反之自定义属性变成设置新对象默认属性值
console.log({...age, ...name}, {...person})

console.log({...person,name:'lisi',age:19})

console.log({name:'lisi',age:19,...person})

//Object.assign(target,source_1,...)用于将源对象的所有可枚举属性复制到目标对象 后面的同名属性会覆盖前面的