var values = [0, 1, 5, 10, 15];
values.reverse();
//sort排序默认比较字符串(先对数组每一项tostring)
var values = [0, 1, 5, 10, 15];
console.log(values.sort());
//比较函数 返回大于0则交换value1 value2
function compare(value1, value2){
    if (value1 < value2){
        return -1;
    }
    else if (value1 >value2){
        return 1;
    }
    else{
        return 0;
    }
}
console.log(values.sort(compare));