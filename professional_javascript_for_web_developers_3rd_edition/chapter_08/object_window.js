var age = 29;
function sayAge(){
  alert(this.age);
}
alert(window.age);
sayAge();
window.sayAge();

window.color = 'red';
delete window.age;
delete window.color;
alert(window.age);
alert(window.color);

var wroxWin = window.open('http://www.baidu.com','new')
if (wroxWin === null){
  alert('the popup was blcked!')
}
setTimeout(function(){
  alert('Hello World');
}, 1000);
window.print();