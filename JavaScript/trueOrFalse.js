// const userInput = prompt("enter something");

// if (userInput){
//     console.log("TRUTHY!")
// }else{
//     console.log("FALSY!")
// }

const age = 3;
if(age >= 0 && age < 5 || age >= 65){
    console.log("free");
}else if (age >= 5 && age < 10){
    console.log("$10");
}else if (age >= 10 && age <65){
    console.log("$65");
}else{
    console.log("Invalid age");
    console.log(age);
}