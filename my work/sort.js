console.log("this is sorting")

let num1=[1,2,3,4,5,6,7,8],
    num2=[2,2,3,4,5,6],
    m,
    n

const mergeascend = (arr1,arr2,m,n)=>{
    sort=arr1.slice(0,m).concat(arr2.slice(0,n));
    for(let i=0;i<sort.length;i++){
        for(let j=i+1;j<sort.length;j++){
            if(sort[i] >= sort[j]){
                let temp =sort[i]
                sort[i] = sort[j]
                sort[j] = temp
            }
    }
}
 num1=sort}

mergeascend(num1,num2,5,3)

console.log(num1)

num1[10] = 20
