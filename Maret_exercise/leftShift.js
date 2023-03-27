

const leftShift = (n, n1) =>{
    if(n1 < 0) return 'no negative values'
    return n*(2**n1)
}

console.log(leftShift(10,3))