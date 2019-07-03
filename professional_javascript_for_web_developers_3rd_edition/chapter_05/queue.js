var colors = new Array();
var count = colors.push('red', 'green');
console.log(count);

count = colors.push('black');
console.log(count);

var item = colors.shift();
console.log(item, colors.length);

console.log(colors.unshift('black'));

colors.pop();
console.log(colors.length);