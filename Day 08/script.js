// function x()
// {
//     let a = 10;
//     function y()
//     {
//         console.log(a); // print 10 because of its lexical environment
//     }
//     y();
// }
// x();

function x()
{
    let a = 10;
    function y()
    {  
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z); 
// Output of the above line
// f y()
// {
//     console.log(a); // print 10 because of its lexical environment
// }
    


//Best example of closure to explain
function x()
{
    let a = 10;
    function y()
    {
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z); 
z(); // 10