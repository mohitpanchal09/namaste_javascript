const arr=[2,3,5,10]
function isOdd(x){
    return x%2
}
function isEven(x){
    return x%2===0
}
const even= arr.filter(isEven)
const odd = arr.filter(isOdd)
console.log(even)
console.log(odd)