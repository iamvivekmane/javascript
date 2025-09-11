function a ()
{
    var b =10;
    c();
    function c(){
        console.log(b); // 10
    }
}

a();
console.log(b); // error: b is not defined