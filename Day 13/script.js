console.log("start");
setTimeout(() => {
    console.log("CB statement");
}, 5000);

fetch("https://jsonplaceholder.typicode.com/todos/1").then(function cBF(){
    console.log("CB netflix");
});
console.log("end");

// output:
// start
// end
// CB netflix
// CB statement