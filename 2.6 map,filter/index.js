arr = [1,2,3,4,5]
const f =(a)=>{
    return a*3
}
// const harsh = arr.map(f)

const f2=(a)=>{
    if(a%2==0){
        return a;
    }
    return;
}
const harsh = arr.filter(f2)
console.log(harsh)