//模式 g i m

// 匹配字符串中所有at的实例
var pattern1 = /at/g;

// 匹配第一个bat 或 cat 不区分大小写
var pattern2 = /[bc]at/i;

//匹配所有以at结尾的3个字符的组合，不区分大小写
var pattern3 = /.at/gi;

console.log(pattern2.source, pattern3.source);

var text = 'jj mom and dad and baby jj';
var pattern = /mom( and dad( and baby)?)?/gi;
var matches = pattern.exec(text);

console.log(matches.index,'//', matches.input, '//', matches[0], '//', matches[1]);


//注意 g模式与i模式
var text = 'cat, bat, sat, fat';
var pattern4 = /.at/;

var matches2 = pattern4.exec(text);
console.log(matches2, matches2.index, matches2[0], pattern4.lastIndex)

var text = '000-00-00000';
var pattern5 = /\d{3}-\d{2}-\d{4}/;

if (pattern5.test(text)){
  console.log('The pattern was matched.')
}