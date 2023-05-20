const jadeString =  function(str){
//     // const stringSplit = string.split('')
//     // const jadeCase = []
return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
//     // for(let i = 0; i < stringSplit.length; i++){
//     //     console.log(jadeCase.push(stringSplit[0].toUpperCase().slice(1)))
//     // }
//     // console.log(stringSplit[0].toUpperCase(),'data array')
//     // return jadeCase.join('')
}
const str = "How can mirrors be real if our eyes aren't real"
console.log(jadeString(str))

// jadeString("How can mirrors be real if our eyes aren't real")


//  #############################################################################
//  #############################################################################



// String.prototype.toJadenCase = function () {
//     return this.split('').map(w => w[0].toUpperCase() + w.slice(1)).join('');
//   };


//   const str = "How can mirrors be real if our eyes aren't real"

//   console.log(str.toJadenCase())