const cart=['shoes','pant','shirt']
api.createOrder(cart,function(){
    api.makePayment(function (){
        api.showOrder()
    })
})