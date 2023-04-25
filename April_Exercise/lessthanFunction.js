
 function test(a,b){
    if (a() > b()) return "a"
    if (b() > a()) return "b"
    else return "neither"
 }


console.log(test(() => 100, ()=> 5))
console.log(test(() => 5, ()=>15), "data 2");
console.log(test(() => 250,  () => 3));