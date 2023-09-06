const arr=[1,2,4]
function square(x){
    return x*x
}
function binary(x){
    return x.toString(2)
}
const output = arr.map(square)
console.log(output) 
const bin = arr.map(binary)
console.log(bin)

const triple = arr.map((x)=>{
    return x*3
})
console.log(triple)

const chouble = arr.map((x)=>x*4)
console.log(chouble)


const scripts = [
    {
      name: 'Avestan',
      yearOfOrigin: 1800,
      status: 'dead',
      family: 'Indo-Iranian',
      usedIn: ['Iran'],
    },
    {
      name: 'Arabic',
      yearOfOrigin: 500,
      status: 'living',
      family: 'Afro-Asiatic',
      usedIn: ['Middle East', 'North Africa'],
    },
    {
      name: 'Coptic',
      yearOfOrigin: 0,
      status: 'dead',
      family: 'Afro-Asiatic',
      usedIn: ['Egypt'],
    },
    {
      name: 'Hebrew',
      yearOfOrigin: 1000,
      status: 'living',
      family: 'Afro-Asiatic',
      usedIn: ['Israel'],
    },
    {
      name: 'Latin',
      yearOfOrigin: -700,
      status: 'dead',
      family: 'Indo-European',
      usedIn: ['Europe', 'America', 'Africa', 'Asia'],
    },
  ]
const names = scripts.map(function(x){
    return x.name
})  
console.log(names)