//


// function even_or_odd(number) {
//     // if(number % 2 === 0) {
//     //     console.log('Even')
//     // }else {
//     //     console.log('Odd')
//     // }
//     return number % 2 == 0 ? console.log('Even') : console.log('Odd')
// }

// even_or_odd(2)  //Even
// even_or_odd(1)  //Odd



// You get an array of numbers, return the sum of all of the positives ones.
// function positiveSum(arr) {
//     let sum = 0

//     let posNum = arr.filter((e)=>{
//         return e > 0 ;
//     })
//     for(let i=0 ; i< posNum.length ; i++) {
//         sum = sum + posNum[i]
//     }
//     return sum
// }

// console.log(positiveSum([1,2,22,-100,0,-2])) //25
// console.log(positiveSum([0])) //0
