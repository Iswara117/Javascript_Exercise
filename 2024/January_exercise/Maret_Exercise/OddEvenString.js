const sortMyString = (S) => {
    let right_string = ""
    let left_string = ""
    S.split("").forEach((e,i) => {
        if(i % 2 === 0) left_string += e
        if(i % 2 !== 0) right_string += e
    
    })
    return left_string + " " + right_string
}
    // your code here
    console.log(sortMyString("CodeWars"))