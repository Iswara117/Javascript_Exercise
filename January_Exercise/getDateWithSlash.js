const timeElapsed = Date.now();
const getDay = new Date(timeElapsed);
var curr_Date = getDay.getDate();
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const getMonth = new Date();
let curr_Month = month[getMonth.getMonth()]
let curr_Year = getMonth.getFullYear()

const dateSlash = curr_Date + "/" + curr_Month + "/" + curr_Year
console.log(dateSlash)