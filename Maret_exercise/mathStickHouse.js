

const mathStickHouse = async(n) => {
    if(n === 0 || n < 0) return 'invalid input'
    else if( typeof n !== 'number') return 'input not a number'
    else{
     return(n*5)+1
    }
}

console.log(mathStickHouse(4))