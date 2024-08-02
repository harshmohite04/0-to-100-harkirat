// function sumOfNum(n){
//     let sum = 0;
//     for(let i=1;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }


// setTimeout(()=>{console.log(sumOfNum(5))},1000)
// console.log("Hello World")

function sum (n){
    if(n==0){
        return 0;
    }
    return n+sum(n-1);
}

console.log(sum(5));