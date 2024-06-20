const cart = ["shoes", "clothes", "cap"]
    
//call back hell
createCart(cart, function(){
    orderSummary(orderId, function(){
        finalCart();
    });
})

const promise = createCart(cart)

//attaching a callback to the promise and chaining promises
promise.then(function(){
    orderSummary(orderId)
}).then(() => {
    finalCart();
})