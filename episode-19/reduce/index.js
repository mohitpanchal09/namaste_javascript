const arr=[1,2,4,23,9]
function sumArr(arr){
    sum=0
    for (let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum
}
console.log(sumArr(arr))

const output = arr.reduce(function(acc,curr){
    acc=acc+curr;
    return acc

},0)
console.log(output)

const maxNum= arr.reduce(function(acc,curr){
    
    if (acc<curr) acc=curr
    return acc
},0)
console.log(maxNum)

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
// const year = scripts.reduce(function(acc,curr){
// if(acc.hasOwnProperty(curr.yearOfOrigin)){
//     acc[curr.yearOfOrigin]+=1
    
// }else{
//     acc[curr.yearOfOrigin]=1
// }
// return acc
// },{})  
// console.log(year)

// or

const year = scripts.reduce(function(acc,curr){
    if(acc[curr.yearOfOrigin]){
        acc[curr.yearOfOrigin]+=1
        
    }else{
        acc[curr.yearOfOrigin]=1
    }
    return acc
    },{})  
console.log(year)

const yearLess = (scripts.filter(x=>x.yearOfOrigin<1000)).map((x)=>{
    return x.name
})
console.log(yearLess)

const yearLessReduce = scripts.reduce(function(acc,curr){
    
    if(curr.yearOfOrigin<1000){
        acc.push(curr.name)
    }
    return acc
},[])
console.log(yearLessReduce)