// function bubbleSort2D(arr) {
//     var n = arr.length;
//     for (var i = 0; i < n; i++) {
//       console.log(i)
//       for (var j = 0; j < n-1; j++) {
//           console.log(arr[j],arr[j+1],arr[j]>arr[j+1], temp)
//         if (arr[j] > arr[j + 1]) {
//           var temp = arr[j];
//           arr[j] = arr[j + 1]; // inisialisasi nilai array 
//           arr[j + 1] = temp; // inisialisasi nilai array selanjutnya
//         }
//       }
//     }

//     console.log(arr)
//     return arr;
//   }
  
  // Contoh penggunaan
  // var array2D = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]];
  // var array2DSorted = bubbleSort2D(array2D);
//   console.log(array2DSorted);
  

var reconstructQueue = function(people) {
  const result = []
    people.sort((a, b) => a[0] === b[0] ? a[1]-b[1] : b[0]-a[0]).forEach(p => result.splice(p[1], 0, p));
  
  return result;
};

console.log(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]))