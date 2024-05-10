function goodVsEvil(good, evil){
    const goodWorth = [
        1, // Hobbits
        2, // Men
        3, // Elves
        3, // Dwarves
        4, // Eagles
        10, // Wizards
      ]
      
      const evilWorth = [
        1, // Orcs
        2, // Men
        2, // Wargs
        2, // Goblins
        3, // Uruk Hai
        5, // Trolls
        10, // Wizards
      ]    

        const goods = good.split(' ').filter(item  => item != isNaN(item)).map(item => parseInt(item)).reduce((accumulator,curValue , index) => accumulator +goodWorth[index] * curValue, 0)
        const evils = evil.split(' ').filter(item  => item != isNaN(item)).map(item => parseInt(item)).reduce((accumulator,curValue , index) => accumulator + evilWorth[index] * curValue, 0)
        return goods > evils ? 'Battle Result: Good triumphs over Evil' : goods < evils ? 'Battle Result: Evil eradicates all trace of Good' :  'Battle Result: No victor on this battle field'



}

console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'))