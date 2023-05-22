function descendingOrder(n){
    //...
    
    var intArr = Array.from(String(n), num => Number(num));
    var descending = intArr.sort().reverse().join("")
    
    
    
    return parseInt(descending)
  }
  
  console.log(descendingOrder(51))