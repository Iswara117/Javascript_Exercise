function isItLetter(character) {
    return /^[a-zA-Z\\]$/.test(character)
  }


  console.log(isItLetter('a'))
  console.log(isItLetter('1'))
  console.log(isItLetter('['))
  console.log(isItLetter('\RS'))