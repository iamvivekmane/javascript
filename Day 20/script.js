const url = "https://jsonplaceholder.typicode.com/posts";

const user = fetch(url);

console.log(user);

user.then(function (data) {
  console.log(data);
});

// Promise chaining
// Below the approaches are same 
//1
createOrder(CaretPosition, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});

//2
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (orderId) {
    return proceedToPayment(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo)
  });

//3
createOrder(cart)
  .then(orderId => proceedToPayment(orderId))
  .then(orderId => proceedToPayment(paymentInfo))
  .then(paymentInfo => updateWalletBalance(paymentInfo))