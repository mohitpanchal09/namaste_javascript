const radius = [4,3,2]
const area = function (radius){
    return Math.PI*radius*radius
}

const perimeter = function(radius){
    return Math.PI*radius*2
}



const calculate = function(radius,logic){
    const output=[];
    for (let i=0;i<radius.length;i++){
        output.push(logic(radius[i]))
    }
    return output
}
console.log(calculate(radius,area))
console.log(calculate(radius,perimeter))