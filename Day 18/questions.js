// Q1
const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];
function full(user){
    return user.firstName +" "+ user.lastName;
}
const fullname = users.map(full);
// console.log(fullname);


// Q2
const output2 = users.reduce(function (acc,curr){
    if(acc[curr.age])
    {
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
},{});
// console.log(output2);



// Q3
function isLessThanThirty(user){
    if(user.age<30){
        return user;
    }
}
function firstName(user){
    return user.firstName;
}

// const output3 = users.filter(isLessThanThirty).map((x)=>x.firstName);

const output3 = users.filter((x)=>x.age<30).map((x)=>x.firstName);

console.log(output4);

