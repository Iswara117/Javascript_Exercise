// const josephSurvivor = (n = 7,k = 3) => {
//     let array = Array.from({length : n}, (_, k) => ++k)
//     k -= 1 
//     let index = k % array.length
    
//     while(array.length > 1) {
//         array.splice(index,1)
//         index = ( index + k) % array.length
//     }

//     return array[0]
// }

// console.log(josephSurvivor())


// menggunakan recursive 

function josephusSurvivor(n, k){
    // console.log( n, k)
    // console.log(n < 1 ? 1 : (josephusSurvivor(n - 1, k) + --k) % n + 1)
    return n < 1 ? 1 : (josephusSurvivor(n - 1, k) + --k) % n + 1;
}
console.log(josephusSurvivor(7,3))