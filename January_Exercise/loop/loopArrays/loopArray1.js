
// learning loop array without function 
let arr = [23,56,4,78,5,63,45,210,56];
let ele = 56;

for (var i=0;i<arr.length;i++){
    if(arr[i]==ele){
      console.log(arr.splice(i,1)); //Delete element from array
    }
  }

  console.log(arr);
