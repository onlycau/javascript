var colors = new Array('red', 'purple', 'blue');
var names = ['michael', 'jerry', 'rose'];
var options = [,,,,,,]
console.log(options.length);
//如果某个值的索引超过了数组现有项数 数组就会自动增加到该索引值+1的长度
colors[99] = 'green';
console.log(colors.length);
//Array().length不只是可读的，可以通过设置这个属性来从数组的末尾移除项或添加新项
colors.length = 2;
colors[colors.length] = 'black';
console.log(colors);
//检测数组
console.log(Array.isArray(colors));
var test
colors[colors.length] = test;
console.log(colors);
