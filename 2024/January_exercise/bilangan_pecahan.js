
const mataUang = [100000,50000,20000,10000,5000,2000,1000,500, 200,100 ]
const pecahan = (nominal) => {
let kembalian = {}
// console.log(typeof nominal)
mataUang.forEach(v => {
    if(nominal >= v){
        const lembar = Math.floor(nominal/v)
        nominal = nominal - v * lembar
        kembalian[`Rp. ${v}`] = lembar
    }
})
    console.log(kembalian)
}


pecahan(19000)
//input ( 19000)
//output ({10000 : 1}, {9000 : 1})