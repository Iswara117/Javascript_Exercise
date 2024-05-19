// const checkDecimal = (a) => Number.isInteger(a) // menggunakan module number 
const checkDecimal = (a) => a.toString().split('.').length - 1 >= 1 ? false : true

console.log(checkDecimal(1.222))
console.log(checkDecimal(4))