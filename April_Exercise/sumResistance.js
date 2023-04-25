function parallelResistance(arr) {
	//  let total = 0;
	// for(let i = 0; i < arr.length; i++){
	// 	total += (1 / arr[i]);
	// }
	
	// return Math.round(total);
    return parseFloat(
        (1 / arr.reduce((accumulative, current) => (accumulative += 1 / current), 0)).toFixed(1)
      );
}

console.log(parallelResistance([6, 3, 6]))