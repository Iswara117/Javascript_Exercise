function spacey(array){
let newArray = []
console.log(newArray.length)
array.map((e,i) => {
    if(newArray.length === 0){
         newArray[i] = array[i]
        //  console.log(newArray[i])
    }else{

        // console.log(newArray[i])
        newArray[i] = newArray[i-1] + array[i]
        // console.log(newArray[i])
    }
})

// consol
}


spacey(['kevin', 'has','no','space'])