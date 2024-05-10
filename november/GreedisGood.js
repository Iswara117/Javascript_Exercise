// function score(dice){
//     // console.log(dice)
//     let counts = new Array(7).fill(0)
//     // dice.forEach(element => {
//     //     console.log(element)
//     // });
//     dice.forEach(element => counts[element] += 1);
//     // console.log(counts)

//     let total_score = 0
//     counts.forEach((element, index )=> {
//         console.log(element)
//         if(element >= 3){
//             if( index === 1){
//                 total_score += 1000
//             }
//             else{
//                 total_score += index * 100
//             }
//         }
//         element -= 3
//     })

//     total_score += counts[1] * 100 + counts[5] * 50
//     return total_score
// }


// console.log(score([1, 1, 1, 3, 3]),'hasil nya ')


//  Version 2
function score(dice) {
    const counts = dice.reduce((acc, die) => {
        // console.log(acc)
      acc[die - 1]++; //karena index mulai dari 0
      return acc;
    }, [0, 0, 0, 0, 0, 0]);
    console.log(counts)
  
    let totalScore = 0;
  
    counts.forEach((count, index) => {
      if (count >= 3) {
        totalScore += index === 0 ? 1000 : (index + 1) * 100;
        count -= 3;
      }
  
      if (index === 0 && count < 3) {
        totalScore += count * 100;
      } else if (index === 4 && count < 3) {
        totalScore += count * 50;
      }
    });
  
    return totalScore;
  }
  
  // Test case
  console.log(score([1, 1, 1, 3, 3])); // Output: 1000
  