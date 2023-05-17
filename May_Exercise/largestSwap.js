function largestSwap(num) {
	if( num > num.toString().split('').reverse().join('')){
        return true
    }
    if(num === num.toString().split('').reverse().join('') )
    {
        return true
    }
    return false
}

console.log(largestSwap(43))

