// var is global scope & don't have block scope
// for(var i=0;i<5;i++){
//     // console.log(i);
//     setTimeout(()=>console.log(i), 5000);
//   }
//  5 5 5 5 (output use var)

// let have a block scope for create a separate scope
  // for(let i=5;i==5;i++){
  //   setTimeout(()=>console.log(i), 5000);
  // }
//  0 1 2 3 4 (ouput use let)
// setTime is a callback function , this out from for when 


var array = [1, 2, 3, 4, 5] // array expression
for(var i = 1; i < array.length; i++) {
  delay(i)
}
//  increment variable i -> result -> pass to function -> out -> back to loop 

// the result of the function will be processed together and will be issued after 5 seconds
async function delay(i) {
  setTimeout(() => {
    console.log(array[i])
  }, 5000);
}

// 2 , 3 , 4, 5