// //{ } indicates the block
// if(true)
// {
//     //Compound statement
//     let a = 10;
//     console.log(a);
// }


// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // ReferenceError: c is not defined

// works same with lexical chain
const a = 10;
{
    const a = 100;
    {
        const a = 200;
        console.log(a); // 200
    }
    console.log(a); // 100
}
console.log(a); // 10