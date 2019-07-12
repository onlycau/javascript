/*数据属性包含一个数据值的位置。在这个位置可以读取和写入值。数据属性有 4 个描述其行为的
特性。
 [[Configurable]] :表示能否通过 delete 删除属性从而重新定义属性,能否修改属性的特
性,或者能否把属性修改为访问器属性。像前面例子中那样直接在对象上定义的属性,它们的
这个特性默认值为 true 。
 [[Enumerable]] :表示能否通过 for-in 循环返回属性。像前面例子中那样直接在对象上定
义的属性,它们的这个特性默认值为 true 。
 [[Writable]] :表示能否修改属性的值。像前面例子中那样直接在对象上定义的属性,它们的
这个特性默认值为 true 。
 [[Value]] :包含这个属性的数据值。读取属性值的时候,从这个位置读;写入属性值的时候,
把新值保存在这个位置。这个特性的默认值为 undefined 。
*/
var person = {};
Object.defineProperty(person,'name',{
  configurable:false,
  value:'nicholas'
});
console.log(person.name);
delete person.name;
console.log(person.name);