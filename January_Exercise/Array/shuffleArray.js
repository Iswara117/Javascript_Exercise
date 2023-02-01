var arr1 = ["a", "b", "c", "d"];


console.log(shuffle_Array(arr1))

function shuffle_Array(arr1){
  
    let after_Shuffle = [];
    for (let start = 0; start < arr1.length; start++) {
        // console.log(start++, 'data start')
        const randomPosition = Math.floor((arr1.length - start) * Math.random()) //get random number ( math.floor round down and math random get number random)
        const randomItem = arr1.splice(randomPosition, 2) // add new array
        
        after_Shuffle.push(...randomItem)
    }

    return after_Shuffle
}