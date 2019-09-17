/*
访问器属性不包含数据值;它们包含一对儿 getter 和 setter 函数(不过,这两个函数都不是必需的)
。
在读取访问器属性时,会调用 getter 函数,这个函数负责返回有效的值;在写入访问器属性时,会调用
setter 函数并传入新值,这个函数负责决定如何处理数据。访问器属性有如下 4 个特性。
 [[Configurable]] :表示能否通过 delete 删除属性从而重新定义属性,能否修改属性的特
性,或者能否把属性修改为数据属性。对于直接在对象上定义的属性,这个特性的默认值为
true 。
 [[Enumerable]] :表示能否通过 for-in 循环返回属性。对于直接在对象上定义的属性,这
个特性的默认值为 true 。
 [[Get]] :在读取属性时调用的函数。默认值为 undefined 。
 [[Set]] :在写入属性时调用的函数。默认值为 undefined 。
*/
var book = {
  _year:2012,
  edition:1
};
Object.defineProperty(book,'year',{
  get:function(){
    return this._year;
  },
  set:function(newValue){
    if (newValue > 2012){
      this._year = newValue;
      this.edition += newValue - 2004
    }
  }
});
book.year = 2019
console.log(book.edition);
var descriptor = Object.getOwnPropertyDescriptor(book, '+year');

//读取对象的属性
var person = {};
Object.defineProperties(person,{
  _year:{
    value:1994
  },
  edition:{
    value:1
  },
  year:{
    get:function(){
      return this._year;
    },
    set:function(newValue){
      if (newValue > 1994){
        this._year = newValue;
        this.edition += newValue - 1994;
      }
    }
  }
})
var descriptor = Object.getOwnPropertyDescriptor(person, "year");
console.log(descriptor);
console.log(descriptor.configurable);