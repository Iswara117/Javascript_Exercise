function minMax(arr) {
	const minMax = []
	
	
	
	let minElement = arr.reduce((a, b) => Math.min(a, b));
    let maxElement = arr.reduce((a, b) => Math.max(a, b));

	
	minMax.push(minElement, maxElement)
    return minMax
    
}
console.log(minMax([10,12,13]))