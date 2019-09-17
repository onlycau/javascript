function createComparisonFunction(propertyName){

  return function(object1, object2){
    var value1 = object1[propertyName];
    var value2 = object2[propertyName];

    if (value1 < value2){
      return -1
    }
    else if (value1 > value2){
      return 1;
    }
    else {
      return 0;
    }
  };
}

var compare = createComparisonFunction("name");
var result = compare({ name: "Nicholas" }, { name: "Greg" });
console.log(result);

//闭包与变量
function createFunctions(){
  var result = new Array();

  for (var i = 0; i < 10; i++){
    result[i] = function(){
      return i;
    };
  }
  return result;
}
functions = createFunctions();
console.log(functions[3]());
functions = null;

function createFunctions2(){
  var result = new Array();

  for (var i = 0; i < 10; i++){
    result[i] = function(num){
      return function(){
        return num;
      };
    }(i)
  }
  return result;
}
functions = createFunctions2();
console.log(functions[9]());
functions = null;

var name = 'the window';
var object = {
  name : 'My object',
  getNameFunc : function(){
    var that = this;
    return function(){
      //console.log(this);
      return that.name;
    };
  }
};
console.log(object.getNameFunc()(), object.name);

//内存泄漏 闭包会引用包含函数的整个活动对象 注意对其的回收

function assignHandler(){
var element = document.getElementById("someElement");
var id = element.id;
element.onclick = function(){
alert(id);
};
element = null;
}
