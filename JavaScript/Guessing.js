let maximum = parseInt(prompt("Enter the maximum number"));
while(!maximum) {
    maximum = parseInt(prompt("enter a valid number"))
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"))
let attempt=1

while(parseInt(guess) !== targetNum){
    if (guess === 'q') break
    attempt++
    if(guess > targetNum){
        guess = prompt("Too high! Enter a new guess :")
    } else {
        guess = prompt("Too low! Enter a new guess:")
    }
}
if (guess === 'q') {
    console.log("ok,you quit!")
} else {
    console.log("YOU GOT IT! AT "+attempt+" try")
}

