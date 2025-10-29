function getLength<T extends { length: number }>(item: T) {
  return item.length;
}
console.log(getLength("hello"));
console.log(getLength([1,2,3]));;   
console.log(getLength({ length: 10 }));; 



function getval<T extends string | number > (val: T){
  return val
}
console.log(getval("fghdjjnj"));
console.log(getval(12345));
   



