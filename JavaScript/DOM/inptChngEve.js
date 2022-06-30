const input = document.querySelector('input')
const h1= document.querySelector('h1')

// input.addEventListener('change', function (e){
//     console.log("input changed")
// })
// input.addEventListener('input', function (e){
//     console.log('input event')
// })
input.addEventListener('input', function (e){
    h1.innerText = "welcome"+" "+input.value
    
})