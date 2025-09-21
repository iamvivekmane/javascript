function x()
{
    let a = 10;
    function y()
    {
        console.log(a);
    }
    a = 100;
    return y;
}
var z = x();
console.log(z); 
z(); // 100
// This happens because of it returns the referecne not the exact value 