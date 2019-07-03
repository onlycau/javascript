var colors = ['red', 'green', 'blue'];
var colors2 = colors.concat('yellow', ['black', 'brown']);
var colors3 = colors.concat('yellow');

console.log(colors, colors2, colors3)

var colors4 = colors2.slice(1);
var colors5 = colors2.slice(0,3);
var colors6 = colors2.slice(-2, -1);

console.log(colors4, colors5, colors6);

var colors7 = colors2.splice(0,1);
console.log(colors7, colors2);


// splice先删除后添加。
var colors8 = colors2.splice(1, 1, 'yellow', 'orange');

console.log(colors8, colors2);