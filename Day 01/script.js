// Hoisting 

console.log(x); // undefined
console.log(getName); // function body
console.log(getName2); // undefined
console.log(getName()); // Hello World!
console.log(getName2()); // error
var x = 7;

function getName() {
    console.log("Hello World!");
}

var getName2 = () => {
    console.log("Hello World!");
}