// for ([initionalization]; [condition]; [iteration]){
//     statement
// }

// for (let i = 0; i < 10; i++) {
//   console.log("Iteration Number", i)
// }

//initialiaztion = Typically used to initalize a counter variable
//conditon - Runs untill condition is false
//iteration - Generally used to update or incraement the counter variable
//statement - code that is excuted while the condition is true

const array = [2, 3, 3, 5, 3, 2, 4]

//print forward
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i])
// }

//print backwards
// for (let i = array.length - 1; i > -1; i--) {
//   console.log(array[i])
// }

// sum = 0
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i])
//   sum = sum + array[i]
// }
//  console.log(sum)


//infinite loop (crtl + c to stop)
// for (let i = 1; i > 0; i++) {
//   console.log(i)
// }


for(let i = 10; i >= 0; i--){
    if (i === 0){
        console.log('BLAST OFF')
        return;
    }
    console.log(i)
}
