// recusive with arrow fuction as expression
const binary = (num) => num === 0 ? 0 : num % 2 + 10 * binary(Math.floor(num / 2))

console.log(binary(69))

function decimal(num){
    if (num === 0) return 0
    return num % 2 + 10 * binary(Math.floor(num / 2))
}
console.log(decimal(666))

function decimal(num){
    if (num === 0) return 0
    return num % 2 + 10 * binary(Math.floor(num / 2))
}
console.log(decimal(666))