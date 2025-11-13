console.log("Hello");

setTimeout(function () {
  console.log("JavaScript");
}, 5000);


const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function () {
  api.proceedToPayment()
})

