// Using then
// const p1 = new Promise((function (resolve, reject) {
//     setTimeout(() => {
//         resolve("P1 is resolved");
//     }, 5000);
// }))
// const p2 = new Promise((function (resolve, reject) {
//     setTimeout(() => {
//         resolve("P2 is resolved");
//     }, 2000);
// }))
// function getData(){
//     p1.then((res)=>{console.log(res);})
// }
// getData();

// Dummy promise using async await
// const p1 = new Promise((function (resolve, reject) {
//     setTimeout(() => {
//         resolve("P1 is resolved");
//     }, 5000);
// }))
// const p2 = new Promise((function (resolve, reject) {
//     setTimeout(() => {
//         resolve("P2 is resolved");
//     }, 2000);
// }))
// async function getData(){
//     const result = await p1;
//     console.log(result);
// }
// getData();


//Actual API call using async await
const API_URL = "https://api.github.com/users/iamvivekmane";

async function getData(){
    const Data = await fetch(API_URL);
    const jsonData = await Data.json();
    console.log(jsonData);
}

getData();
