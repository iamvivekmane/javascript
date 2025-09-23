// function statement
function a() {
    console.log("a is called");
}

// function expression
var b = function () {
    console.log("b is called");
}

//function declaration
function c() {
    console.log("c is called");
}

//anonymous function
var d = function () {
    console.log("d is called");
}

//named function expression
var e = function xyz() {
    console.log("e is called");
}

//function parameters and arguments
function f(param1,param2) { //parameters
    console.log(param1,param2);
}
f(10,20);//arguments



//First class funtions

//passing functions as arguments
function g(param1) {
    console.log(param1);
}
g(function (){
    console.log("hello");
});


//returning function as values
function h(param1) {
    return function(){
        console.log("hello");
    }
}

var a = h();
console.log(a);