function digitCount(num) {
    var count=0; //return 1 for pow=0
    while(num!=0){ //The while loop will continue until the num in the parameter becomes 0 / falsy
      console.log(count)
      num=Math.floor(num/10); // the num variable after the parameter is re-insulated with the value from the division of num and 10
      count++; // after that count will increment
    }
    return count;
  }

  console.log(digitCount(123));