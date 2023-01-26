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