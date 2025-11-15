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


// It returns the value of the first settled promise irrespective of it was rejected or resolved doesn't matter
Promise.race([p1,p2,p3]).then(res=>{
    console.log(res);
}).catch((err)=>{
    console.error(err);
})