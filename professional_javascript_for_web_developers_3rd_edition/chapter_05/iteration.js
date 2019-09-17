var numbers = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1];

function above_2(item, index, array){
  return (item > 2)}

console.log(numbers.every(above_2));

console.log(numbers.filter(above_2));

console.log(numbers.forEach(above_2), numbers);

console.log(numbers.map(above_2), numbers);

console.log(numbers.some(above_2), numbers);