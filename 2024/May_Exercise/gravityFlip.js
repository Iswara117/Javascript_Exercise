const flip=(d, a)=>{
    return d == 'R' ? a.sort((a, b) => a-b) : a.sort().reverse()
  }

  console.log(flip('R',[5,4,3,2,1]))