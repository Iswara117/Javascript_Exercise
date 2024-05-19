// Array.prototype.sort = function () {
//     console.log(this)
// }

// const originalSort = Array.prototype.sort;

// Array.prototype.sort = function () {
//     return originalSort.apply(this);
// };

Array.prototype.bubleShort = function() {
    const arrayLength = this.length;
    let isSwapped;
    for(let i = 0; i < arrayLength; i++){
        // console.log(i)
        for(let h = 0; h < arrayLength - 1; h++ ){
            if (this[h] > this[h + 1]) { // apakah this[h] lebih besar daripada this[h+1]
                // Swap the elements
                console.log(h)
                console.log(this[h], 'ini h')
                console.log(this[h+1], 'ini h + 1')
                let temp = this[h];
                this[h] = this[h + 1];
                this[h + 1] = temp;
                isSwapped = true
            }

        }
        if(!isSwapped) break
    }
    return this;
}

console.log([9,7,2,4,5,3,6,8,1].bubleShort())
// console.log([9,7,2,4,5,3,6,8,1].sort())
// [1,2,3,4,5,6,7,8,9]