const test1 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
const test2 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,9]
const test3 = [19]

const plusOne = function(digits, length) {
    if(digits[length] === 9){
        digits = [...plusOne(digits.slice(0,-1),length - 1), 10]
    }else{
        digits[length]++
    }
    // console.log(digits)
    return digits;
};


console.log(plusOne(test3, test3.length - 1))
