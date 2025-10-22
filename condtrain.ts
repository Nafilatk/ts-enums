function getLength<T extends { length: number }>(item: T) {
  return item.length;
}
console.log(getLength("hello"));
console.log(getLength([1,2,3]));;   
console.log(getLength({ length: 10 }));; 

