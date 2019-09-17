var values = [1, 2, 3, 4, 5, 6]

function addAll(prev, cur, index, array){
  return prev + cur;
}
console.log(values.reduce(addAll), values.reduceRight(addAll));