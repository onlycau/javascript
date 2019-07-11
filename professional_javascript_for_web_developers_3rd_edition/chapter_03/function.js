function sayHi(){
    var hi = ('hello' + arguments[0] + ',' + arguments[1])
    return hi;
}
console.log(sayHi('hah', 'ss'));

function doAdd(num1, num2){
    if(arguments.length === 1){
        console.log(arguments[0] + 1);
    }else if(arguments.length ===2){
        console.log(arguments[0] + arguments[1]);
    }
}
doAdd(10);
doAdd(30, 20);