// callback functions
setTimeout(function(){
    console.log("timer")
},5000)

// decalaring function x and shows it will accept callback function y and y will be called inside it
function x(y){
console.log('x')
y()
}

// calling function x and passing  callback function y
x (function y(){
    console.log('y')
})