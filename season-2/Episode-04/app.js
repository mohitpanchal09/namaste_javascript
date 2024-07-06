// async function getData(){
//     return 'samarth'
// }
// const dataPromise = getData();
// console.log(dataPromise)
// dataPromise.then(res=>console.log(res))


// -----------------------
// const pr = new Promise((resolve,reject)=>{
//     resolve('promise resolved value')
// })
// async function getData(){
//     return pr;
// }
// const dataPromise = getData();
// console.log(dataPromise)
// dataPromise.then(res=>console.log(res))
// ----------------------------
// how do we use async with await
// const pr = new Promise((resolve,reject)=>{
//     resolve('promise resolved value')
// })
// async function handlePromise(){
//     const value = await pr;
//     console.log(value)
// }
// handlePromise()


// ---------------------------


// const pr = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('promise resolved value')
//     },5000)
    
// })
// async function handlePromise(){
//     console.log('start')
//     const value = await pr;
//     console.log(value)
//     console.log('end')
// };

// function handleData(){
//     // js engine will not wait for promise to be resolved, it will move to the next line
//     pr.then((res)=>{
//         console.log(res)
//     })
//     console.log('samarth')
// }
// // handleData()
// handlePromise()


// -------------------what if there are mmore than 1 await----------------
const pr = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('promise resolved value')
    },5000)
    
})

async function handlePromise(){
    console.log('start')
    const value1 = await pr;
    console.log(value1)
    console.log('end')
    console.log('start')
    const value2 = await pr;
    console.log(value2)
    console.log('end')
};

handlePromise();