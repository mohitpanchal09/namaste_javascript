const cart=['shoes','shirt','pant']

createOrder(cart)
.then(function(orderId){
    console.log(orderId)
    // proceedToPayment(orderId)
    return orderId
}).then(function(orderId){
    return proceedToPayment(orderId)
}).then(function(paymentInfo){
    console.log(paymentInfo)
})
.catch(function(err){
    console.log(err.message)
})

// producer of promise object
function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        // validate cart
        if(!validateCart(cart)){
            const err = new Error('cart is not valid')
            reject(err)
        }
        // if succesful create order, its logic
        const orderId = '12345 ';
        if(orderId){
            resolve(orderId)
        }
    })

    return pr
}

function proceedToPayment(orderId){

    return new Promise(function(resolve,reject){
        resolve('payment is done')
    })
}

function validateCart(){
    return true;
}