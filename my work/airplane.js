const array = [1,6,3,4,5,0,0,0,6]

console.log("this is airplane")

const minPlane = (arr)=>{
    let min=[]
    for (let i = 0; i < arr.length; i+=arr[i]) {
        
            
            min.push(arr[i])       
        
    }
    console.log(min)
    console.log(`the minimum plane required is ${min.length - 1}`)
}

minPlane(array)





