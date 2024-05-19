// const howManySetence = (a,b) =>  b.toLowerCase().split(a.toLowerCase()).length -1
const howManySetence = (a,b) =>  b.toLowerCase().split(' ').filter(text => text.includes(a.toLowerCase())).length


console.log(howManySetence('M','How many times does the character occur in this setence?'))
console.log(howManySetence('H','How many times does the character occur in this setence?'))
console.log(howManySetence('z','How many times does the character occur in this setence?'))