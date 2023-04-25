/* Write a JavaScript program to get the integers in range (x, y). 
 Example : range(2, 9)
 Expected Output : [3, 4, 5, 6, 7, 8] */


 //with method array 
//  const task1 = [1,2,3,4,5,6,7,8,9]
//  const range = task1.slice(2,7)
 // console.log(range)

 // with recursive 
 const range_recursive = function(start_num, end_num) 
{
  if (end_num - start_num === 2) 
  {
    return [start_num + 1];   // diambil pertama kali walaupun dijalan kan terakhir kali 
  } 
  else 
  {
    var list = range_recursive(start_num, end_num - 1);  
    list.push(end_num - 1); // di tambahkan setelah if terambil 
    return list;
  }
};


(range_recursive(4,9))


/* Write a JavaScript program to compute the sum of an array of integers.
Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21 */

// version use recursive
const sum_Array_Recursive = function async (array){

    //console.log(array.length)

    if(array.length === 0 ){
        
        return 0 
    } else {
        const sum = array[0] + sum_Array_Recursive(array.slice(1))
        console.log(array[0])
        return sum
    }
}



const array = [1, 2, 3, 4, 5, 6]
sum_Array_Recursive(array)

// const sum_Array_Loop = function async(array){
//      let equals = 0

//     // console.log(equals)
//     for(let i = 0; i < array.length; i++){
//         equals += array[i]
        
//     }

//     return equals
// }

// console.log(sum_Array_Loop(array))


/* Write a JavaScript program for binary search.
Sample array : [0,1,2,3,4,5,6]
console.log(l.br_search(5)) will return '5' */

// function findNumber(data, id) {
//     for(var i = 0; i < data.length; i++) {
//         if (data[i].id === id) {
//             return data[i];
//         } else if (data[i].children && data[i].children.length && typeof data[i].children === "object") {
//             findById(data[i].children, id);
//         }
//     }
// }

Array.prototype.br_search = function (target) 
{

  // console.log(target)
  var half = parseInt(this.length / 2);
  
  // console.log(half + this.slice(half,target.length).br_search(target))
  if (target === this[half]) 
  {
    // return half
    console.log("ini data if 1", half)
    return half
  }
  if (target > this[half]) 
  {
    console.log( "ini data if",  half + this.slice(half,this.length).br_search(target));
    console.log(half + this.slice(half,this.length))
    return half + this.slice(half,this.length).br_search(target)
  } 
  else
  {
    console.log("ini data else", this.slice(0, half).br_search(target));
    return this.slice(0, half).br_search(target)
  }
};

l= [0,1,2,3,4,5,6];
// slice = 3 + l.slice(3,7)
// console.log(slice)
// slice.br_search()
// let slice2 = slice.slice(0,3)
// console.log(slice.br_search(slice))
// slice.br_search(5)
l.br_search(6);



