// const password = prompt('please enter your password')

// if (password.length >=6){

//     if(password.indexOf(' ') === -1) {
//         console.log("Valid Passsword!")
//     }else{
//         console.log("Passsword cannot contain spaces")

//     }


// } else{
//     console.log("Passsword too short! Must be 6+ character")
// }

//same program using and nethode
const password = prompt("Enter your password");
if (password.length >=6 && password.indexOf(' ') === -1) {
    console.log("valid Passsword")
} else{
    console.log("invalid Passsword")
}