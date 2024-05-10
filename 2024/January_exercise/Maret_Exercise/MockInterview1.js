const FindSumTarget = (arr, target) => {
    const newArr = arr.map((_,i) => {
        const Calculate = arr[i] + arr[i + 1]
        // console.log(Calculate)
        if(target === Calculate && !isNaN(Calculate)) return [arr[i], arr[i+1]]
        })

    return newArr.filter(item => item != undefined).flat()
}

console.log(FindSumTarget([1,2,3,4,5,6,7,2,7,9,8] , 17))