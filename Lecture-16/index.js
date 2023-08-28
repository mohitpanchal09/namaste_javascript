// function statement/ function decalaration
// a()
// b() returns an error - reference error b is not a function
function a(){
    console.log(' a called')
}

// function expression

var b = function(){
    console.log('b called')
}
a()
b()

// anonymous function

var c=function (){
    console.log('c called')
}
c()

// named function expression

var d = function xyz(){
    console.log('d called')
}
// xyz() returna an error because xyz is not a function in global scope 
d()

// first class function

function hello(){
    return 'hello'
}

function m(param1,param2){
    return (param1()+param2)
}

console.log(m(hello,'world'))