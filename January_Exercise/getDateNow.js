const arrayDay = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu']

const d = new Date();
let day = d.getDay()

const stringDay = arrayDay[day] 

console.log(stringDay)

