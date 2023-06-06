const solution = (number) => number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);

console.log(solution(10))
console.log(solution(0))

console.log([...new Array(10).keys()])