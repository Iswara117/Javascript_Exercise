// belum fix ya

// Downward Triangle Star Pattern
function trianumber(range){
    // console.log('masuk')
    var str = " " ;
    for(var i=0;i<range;i++){
        for(var j=0;j< range - i;j++){
          str += j;
        }
        str += '\n';
        // console.log(str);
        // console.log('keluar')
      }
    console.log(str)
}

trianumber(5)

// Left Triangle Pattern with 3 symbol 
function triasymbol(range){

let string = "";
for (let i = 1; i <= range; i++) {
  let kondisi = 0;  // first value variable kondisi
  for (let j = 1; j <= i; j++) {
    if(kondisi == 3){  // check value in kondisi
        kondisi = 0;  // if value = 3 , will change this value to 0 
    }
    else {
      if(kondisi == 0){
        string += '*';
    }
    else if(kondisi == 1){
      string += '$';
  }
    else {
        string += "#";
    }
    kondisi++  //increment varibale kondisi
    }
  }
  string += "\n";
}
console.log(string);
}


triasymbol(10)