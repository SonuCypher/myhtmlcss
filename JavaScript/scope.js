// let totalEggs = 0;
// function collectEggs(){
//     totalEggs = 6;
// }
// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// let bird = 'Scarlet Macaw'
// function birdWatch(){
//     let bird = 'Great Blue Heron'
//     console.log(bird);
// } 
// birdWatch()
// above two are examples of function scopes


// the below programme wont run because its outside the block("{}")
// let radius = 8
// if (radius > 0){
//     const PI = 3.14159
//     let msg = 'HIIIII!'
// }
// console.log(radius)
// console.log(msg)

//below is the example for lexical scopes
// function bankRobbery(){
//     const heroes = ['spiderman','woverine','batman','superman']
//     function cryForHelp(){
//         for (let hero of heroes){
//             console.log(`please help,${hero.toUpperCase()}`)
//         }
//     }cryForHelp()
// }