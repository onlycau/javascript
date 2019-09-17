var colors = ['red', 'green', 'blue'];
var colors2 = colors.concat('yellow', ['black', 'brown']);
var colors3 = colors.concat('yellow');

console.log(colors, colors2, colors3)

/*切片 返回第一个和第二参数之间的项 不包括第二参数项 只有一个参数无结束位置。
*参数有负数 负数全加上数组长度 不英雄原数组
*/
var colors4 = colors2.slice(1);
var colors5 = colors2.slice(0,3);
var colors6 = colors2.slice(-5, 3);

console.log(colors4, colors5, colors6);

var colors7 = colors2.splice(0,1);
console.log(colors7, colors2);


// splice先删除后添加。splice(起始位置， 删除的项数， 插入的项) 直接操作的原数组
// 返回的是删除的项 而不是数组本身
console.log(colors2);
var colors8 = colors2.splice(1, 1, 'yellow', 'orange');

console.log(colors8, colors2);