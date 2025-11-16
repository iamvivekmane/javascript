// "use strict"

//Global scope
console.log("global " ,this); // window

//Functional scope
function y(){
    console.log(this); // with strict : undefined , without strict : window
}

//Inside object
const obj1 = {
    x: "abhi",
    y:function () {
        console.log(this); // value of the object
    }
}

const obj2 = {
    x: "deepika"
}

// arrow function 
const obj3 = {
    x: "abhi",
    y: () => {
        console.log(this); // window
    }
}
const obj4 = {
    x: "abhi",
    y: function () {
        const a = () => {
            console.log(this); // value of object
        }
        a();
    }
}

y();

obj1.y();

obj1.y.call(obj2); // call will pass this of obj3 to y of obj2

obj3.y();

obj4.y();

