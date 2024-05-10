function findEvenIndex(arr)
{
   for (let i = 0 ; i < arr.length ; i++){
    // console.log(arr.slice(0,1))
    let LHS = arr.slice(0,i).reduce((accu,curValue) => accu + curValue,0)
    let RHS = arr.slice(i + 1).reduce((accu,curValue) => accu + curValue,0)

    // console.log(LHS)
    // console.log(RHS)

    if(LHS === RHS){
        return i
    }
   }

   return -1
}

console.log(findEvenIndex([20,10,-80,10,10,15,35]))