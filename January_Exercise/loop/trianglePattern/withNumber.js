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

trianumber(5);


