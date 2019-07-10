getOneType = (arr, type) => arr.filter(el => typeof el == type)
const someArr = [1, true, false, undefined, NaN, null, 'hello', true, 'text', true];
console.log(getOneType(someArr, 'number'))