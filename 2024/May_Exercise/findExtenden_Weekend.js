const findExtendedWeekend = (startYear, endYear) => {
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
 const extendedMonths = [...Array(endYear+1).keys()].slice(startYear).map(year => ([0,2,4,6,7,9,11].filter(monthIndex => new Date(year,monthIndex,1).getDay() === 5)).map(monthIndex => `${months[monthIndex]} ${year}`)).flat()
 console.log(extendedMonths)
    
 const firstExtendedMonth = extendedMonths.length > 0 ? extendedMonths[0].split(" ")[0] : ""
 const lastExtendedMonth = extendedMonths.length > 0 ? extendedMonths[extendedMonths.length - 1].split(" ")[0] : ""
 return [firstExtendedMonth,lastExtendedMonth,extendedMonths.length]
}


console.log(findExtendedWeekend(1900,1950))
