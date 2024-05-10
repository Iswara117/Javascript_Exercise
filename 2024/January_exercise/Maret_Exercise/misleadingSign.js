function gaslighting(shirtWord,yourWord,friendsLetters) {
    if(!friendsLetters) return false
    const array_shirt = [...shirtWord] ; //dirubah ke array
    // console.log(array_shirt.length)
    if(array_shirt.length === 1 && !friendsLetters.includes(...array_shirt) && !friendsLetters.includes([...yourWord])) return false
    // console.log('masuk ke if ke 3')
    if(array_shirt.length === 1 && friendsLetters.includes(...array_shirt) || friendsLetters.includes([...yourWord])) return true

    const result = [...yourWord].some((e, i) => {
        return array_shirt[i] === e && !friendsLetters.includes(...array_shirt);
    });


    const result2 = array_shirt.some((e, i) => {
        return [...yourWord][i] === e && !friendsLetters.includes(yourWord);
    });
    // console.log('masuk ke if ke tahap terakhir')
    // console.log(result2)

    return result && result2;

  }



  console.log(gaslighting("snack","snake","c"),'A') //true
  console.log(gaslighting("snack","snack","snack"),'B') //false
  console.log(gaslighting("ping","pong","png"),'C') //false
  console.log(gaslighting("snake","snack","c"),'D') //true
  console.log(gaslighting("r","p",""),'E') //false
  console.log(gaslighting("t","b","x"),'F') //false
  console.log(gaslighting("c","k","c"),'G') //true
  console.log(gaslighting("hde","kgy","z"),'H') //false
  console.log(gaslighting("lb","ct","lnmiat"),'I') //true
  