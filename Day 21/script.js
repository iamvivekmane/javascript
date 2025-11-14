const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function (err) {
        console.log(err.message);
    })
    .then(function (orderId) {
        console.log("Not matter what happens, I will definietely be called.");
    })

//Producer part

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        //createOrder
        //validateCart
        // orderId
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        //logic for createOrder
        const orderId = "12345";
        if (orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 5000);
        }
    });
    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("Payment successful");
    })
}


function validateCart(cart) {
    return true;
}