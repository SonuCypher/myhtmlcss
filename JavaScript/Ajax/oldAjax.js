//"https://www.dnd5eapi.co/api/monsters/adult-black-dragon"


/*const req = new XMLHttpRequest()

req.onload = function () {
    console.log('it loaded')
    const data = JSON.parse(this.responseText)
    console.log(data.name, data.alignment)
}

req.onerror = function (){
    console.log("error loading")
    console.log(this)

}

req.open('GET',"https://www.dnd5eapi.co/api/monsters/adult-black-dragon")
req.send()*/

fetch("https://www.dnd5eapi.co/api/monsters/adult-black-dragon")
.then((res)=>{
    console.log("resolved",res)
    res.json().then((data)=> console.log("json done",data))
})
.catch((e)=>{
    console.log('error',e)
})