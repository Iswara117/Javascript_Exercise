function pigIt(str){
//  if(str.endsWith("ay")){
//    return str.slice(0,-2) 
//  }
    let str_new = str.split(" ")
  return str_new.map(e => e.substr(1) + e[0] + 'ay').join(' ');
}


console.log(pigIt('Oay emporatay oay oresmay !ay'))