// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const inputA=document.querySelector('#product')
const inputB=document.querySelector('#qty')
const list=document.querySelector('#list')

form.addEventListener('submit',function(e){
   e.preventDefault()
    const product=inputA.value
    const qty=inputB.value
    const output=qty+" "+product
    const newList = document.createElement("LI")
    newList.innerText=output
    list.append(newList)
    inputA.value= ""
    inputB.value= ""
    
})