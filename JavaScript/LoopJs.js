for (let i = 0;i<=20;i++){
    console.log(i)
}


// same using while loop

let j=0
while (j<=20) {
    j++
    console.log(j)
}
const SECRET = "BabyHippo"
 let guess = prompt("enter the secret")
 while(guess!==SECRET){
    guess = prompt("Enter the secret:")
 }
 console.log("congrats Idiot")


// for of loop example
//  const numbers = [1,2,3,4,5,6,7,8,9];
//  for(let score of numbers){
//     console.log(score)
//  }

// for in loop example


const testScore ={marlon:45,micheal:55,fredo:2,vito:95,vincent:100}
for(let gangster in testScore){
    console.log(gangster+" scored "+testScore[gangster])
}