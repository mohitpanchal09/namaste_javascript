const cart=['shoes','pant','car']

// createOrder(cart,function(){
//     makePayment(orderId);

// })

// const promise = createOrder(cart);
// // {data:undefined}
// // after few seconds
// // {data:orderDetails}
// promise.then(function(){
// makePayment(orderId)
// })

// promise

// const githubApi= 'https://api.github.com/users/mohitpanchal09'

// const user = fetch(githubApi);
// console.log(user)
// user.then(function(data){
//     console.log(data)
// })

// promise chaining

createOrder(cart).then(function(orderId){
   return makePayment(orderId)
})
.then(function(orders){
   return showOrders(orders)
})
.then(function(balance){
  return updateWallet(balance)
})