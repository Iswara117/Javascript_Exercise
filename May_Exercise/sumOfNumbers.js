function digitalRoot(n) {
    const numberString  = n.toString().split("")
    if(n<10) return n
    
    
    return digitalRoot(numberString.reduce((total,value) => {
        return parseInt(total) + parseInt(value)
      }, 0))
  }

  console.log(digitalRoot(456))