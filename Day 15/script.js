console.log("start");
setTimeout(function cb(){
console.log("Callback");
},5000);

console.log("end");

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate <= startDate + 10000){
    endDate = new Date().getTime();
}
console.log("Terminated compilation");

// output:
// start
// end
// Terminated compilation
// Callback

// The output will be the same even if the delay is 0 in the setTimeOut()