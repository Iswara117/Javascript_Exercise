// function is_prime(num){
//     const primes = [];
//     // const n = 
//     const isPrime = new Array(num + 1).fill(true);
//     isPrime[0] = isPrime[1] = false;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (isPrime[i]) {
//             for (let j = i * i; j <= num; j += i) {
//                 isPrime[j] = false;
//             }
//         }
//     }

//     for (let i = 2; i <= num; i++) {
//         if (isPrime[i]) {
//             primes.push(i);
//         }
//     }

//     if(primes.includes(num)){
//         return true
//     }else{
//         return false
//     }

// }

// console.log(is_prime(5099))


function isPrime(num) {
    if (num < 2) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    
    const maximumDividor = Math.sqrt(num) + 1;
    console.log(maximumDividor)
    for (let i = 2; i < maximumDividor; i++) {
        console.log(i)
        if (num % i === 0) {
            return false;
        }  
    }
    return true
}
// console.log(isPrime(6))
isPrime(8)