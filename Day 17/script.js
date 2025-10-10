// Map
const arr = [11, 20, 30, 80];

// function double(x)
// {
//     return x*2;
// }
// const output = arr.map(double);

// const output = arr.map((x)=>x.toString(2));
// console.log(output);



//Filter

// function isOdd(x)
// {
//     return x%2;
// }
// const output = arr.filter(isOdd);

// const output = arr.filter((x)=>x>20)
// console.log(output);


// Reduce

// const output = arr.reduce(function (acc, curr) {
//     acc = acc + curr;
//     return acc;
// },0)
// console.log(output);

// const output2 = arr.reduce(function(acc,curr){
//     acc = curr;
//     if(curr>acc){
//         acc = curr;
//     }
//     return acc;
// },0)

// console.log(output2);


const users = [
    {firstname: "akshay", lastname: "sharma" , age: 19},
    {firstname: "vijay", lastname: "sharma" , age: 18},
    {firstname: "ajay", lastname: "sharma" , age: 18},
    {firstname: "nil", lastname: "sharma" , age: 29}
]
// const output3 = users.map(x => x.firstname + " " + x.lastname);
// console.log(output3);


const o =[];
const output4 = users.map(function(x){
    let age = x.age;
    let o = []
    if(x.age ==age)
    {
        o.push(age,x.age)
    }

        // if(x.age == 18){
        //     return x.firstname;
        // }
        // else{
        //     return 0;
        // }
    return 0
})

console.log(output4);