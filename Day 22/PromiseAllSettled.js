const p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("P1 success")
    }, 3000);
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("P2 failed")
    }, 1000);
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("P3 success")
    }, 2000);
})


// It waits for all the promises to get settled
Promise.allSettled([p1,p2,p3]).then(res=>{
    console.log(res);
}).catch((err)=>{
    console.error(err);
})