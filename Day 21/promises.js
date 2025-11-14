const cart = ["shoes", "shirt", "pant"];


const promise = createOrder(cart)
    .then(function (serialNo) {
        console.log(serialNo);
    })
    .then(function (orderId) {
        return proceedToPayment(orderId)
    })

    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .then(function (orderId) {
        return showOrderSummary(orderId);
    })
    .then(function (orderId) {
        console.log(orderId);
    })
    .then(function (orderId) {
        return updateWallet(orderId);
    })
    .then(function (balance) {
        console.log("After updating the wallet the remaining balance is");
        console.log(balance);
    })
    .catch(function (err) {
        console.log(err.message);
    })


//Producer
function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid ");
            reject(err);
        }
        const orderId = 9090843;
        resolve(orderId);
    })
    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("Payment successful");
    })
}

function showOrderSummary(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("This is the order summary");
    })
}
function updateWallet(orderId) {
    return new Promise(function (resolve, reject) {
        const balance = 2001;
        resolve(balance);
    })
}

function validateCart(cart) {
    return false;
}
