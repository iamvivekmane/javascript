const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("P1 success")
        reject("P1 failed")
    }, 3000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P2 failed")
    }, 1000);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("P3 success")
        reject("P3 failed")

    }, 2000);
})


// It will wait for the first settled success
// If all fail then it will return an aggregate error which is an array of all errors
Promise.any([p1, p2, p3]).then(res => {
    console.log(res);
}).catch((err) => {
    console.error(err);
    console.log(err.errors);
})