const form =document.querySelector('#twitt')
const input =document.querySelector('#inputI')
const list =document.querySelector('#cats')
form.addEventListener("submit", function(e){
    e.preventDefault()
     const catName = input.value
     const newList = document.createElement("LI")
     newList.innerText = catName
     list.append(newList)
     input.value = ""
})