//子串的识别 str.endsWith(suffix,start=0,len(str)) str.startsWith(str, posiont=0)
let string = 'aabcde'
console.log(string.includes('a'), string.startsWith('c',3), string.endsWith('b',3))

//重复
console.log('helllo '.repeat(3))

//补全
console.log('hello'.padStart(10,'ad'))

//模板字符串
function f(stringArr,...values){
 let result = "";
 for(let i=0;i<stringArr.length;i++){
  result += stringArr[i];
  if(values[i]){
   result += values[i];
        }
    }
 return result;
}
let name = 'Mike';
let age = 27;
console.log(f`My Name is ${name},I am ${age+1} years old next year.`);