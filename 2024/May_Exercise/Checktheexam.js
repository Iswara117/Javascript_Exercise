function checkExam(array1, array2) {
    let countAnswer = 0
       array1.map((v, i) => { 
       if (v === array2[i]) {
           return countAnswer += 4;
       } else if(array2[i] === ""){
             return v; 
       } else {
        return countAnswer -= 1
       }
   })
    if(countAnswer < 0) countAnswer = 0

       return(countAnswer)
   }
//    console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))
//    checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])
   console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]))
//    checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])