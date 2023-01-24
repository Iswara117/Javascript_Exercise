// belum fix ya

function trianumber(range){
    // console.log('masuk')
    for(var i=10;i>=range;i--){
        var str = "" ;
        // console.log(i, '' ,'ini data variable i ');
        // console.log(str)
        for(var j=10;j>=i;j--){
          str += '*'+" ";
        //   console.log(j, '' ,'ini data variable j ');
        //   console.log(j)
        for(var k=0;k<range;k++){
            str += " "+k+" ";
            // console.log(k, '' ,'ini data variable k ');
          //   console.log(j)
          }
        }
        console.log(str);
        // console.log('keluar')
      }
      
}

trianumber(5)