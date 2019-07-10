getOneType = arr => arr.filter(el => isNaN(el) != true)
const someArr = [1, true, false, undefined, NaN, null, 'hello', true, 'text', true, 2, 15];
console.log(getOneType(someArr))
#Solved
