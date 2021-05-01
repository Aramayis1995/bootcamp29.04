function twoArrays(arrfirst, arrsecond) {
  arrsecond.push(arrfirst.pop());
  arrfirst.push(...arrsecond);
  console.log(arrfirst);
}
twoArrays([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]);
