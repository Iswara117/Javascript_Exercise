// function toWeirdCase(string){
//     // const array = string.split(" ")
//     return string.split(" ").map((word) =>
//     word.split('').map((char, index) =>{
//         // console.log(char,index)
//         return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
//     }
//     ).join('')
//   ).join(' ');
// }

// version 2 
function toWeirdCaseCharacter(chr, index)
{
  return index % 2 ? chr.toLowerCase() : chr.toUpperCase();
}

function toWeirdCaseWord(word){
  return word.split("").map(toWeirdCaseCharacter).join("");
}

function toWeirdCase(string){
  return string.split(" ").map(toWeirdCaseWord).join(" ");
}
  

  console.log(toWeirdCase("Weird string case"))