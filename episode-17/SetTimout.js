console.log('start')
setTimeout(function cb(){
    console.log('cb')
},5000)

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate<startDate+10000){
    endDate = new Date().getTime();
}

console.log('end')