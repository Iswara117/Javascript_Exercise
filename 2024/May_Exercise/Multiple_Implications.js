const multimplication = (args) => {
    if(!args.length) return null
 
    if(args.length === 1) return args.toString()
    let result1 =   args[0] === args[1]  ? true : args[1]
let result;
 args.forEach((element,index) => {
    result = index == 0 ? (!element[index]) || element[index+1] : result && (!element[index] || element[index+1]) 
});

console.log(result)
// return args.length > 2 ? result : result1
}
// console.log(multimplication([true,false,true,false,false,true,false,false])) // harus  false
console.log(multimplication([false,false,true,true,true,true,true,false])) // harus true
// console.log(multimplication([false, false, false, false, false, true, true, false])) // harus false

// console.log(multimplication([]))
// console.log(multimplication([false]))
// console.log(multimplication([false,true]))