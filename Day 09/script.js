// // setTimeout
// function x(){
//     setTimeout(function(){
//         console.log("Hello after 3000");
//     }, 3000);
// }
// x();


// Q.Print 1 2 3 4 5 with the delay of number which are going to print
// function y()
// {
//     for(var i =1;i<=5;i++){
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000); // 6 6 6 6 6
//     }
// }
// y();



// // 1. use let in for loop
// function a()
// {
//     for(let i = 1;i<=5;i++)
//     {
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000);
//     }
// }
// a();


// 2. Pass the value in the loop to another function
function b()
{
    for(var i =1;i<=5;i++)
    {
        function close(x){
            setTimeout(() => {
                console.log(x);
            }, x * 1000);
        }
        close(i);
    }
}
b();