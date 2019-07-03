var values = [10, 3, 2, 4, 5];
values.reverse();
console.log(values);

values.sort();
console.log(values);

function compare(value1, value2){
  if (value1 < value2){
    return -1;
  }
  else if (value1 > value2) {
    return 1;
  }
  else{
    return 0;
  }
}

values.sort(compare);
console.log(values);

function compare_easy(value1, value2){
  return value2 - value1;
}

values.sort(compare_easy);
console.log(values);