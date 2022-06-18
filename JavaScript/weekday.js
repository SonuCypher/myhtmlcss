// const dayOfWeek = prompt('ENTER A DAY');

// if (dayOfWeek === 'monday'){
//     console.log('Goto Hell Monday')
// }else if (dayOfWeek === 'sunday'){
//     console.log('sunday the sunny day')
// }else if (dayOfWeek === 'saturday'){
//     console.log('Busy day')
// }else{
//     console.log('MEH')
// }

const password = prompt('please enter your password')

if (password.length >=6){

    if(password.indexOf(' ') === -1) {
        console.log("Valid Passsword!")
    }else{
        console.log("Passsword cannot contain spaces")

    }


} else{
    console.log("Passsword too short! Must be 6+ character")
}