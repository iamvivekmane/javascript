const arr = [1, 2, 10, 40, 22, 77];

function double(x)
{
    return x *2;
}
function triple(x)
{
    return x*3;
}


const output1 = arr.map(double);
const output2 = arr.map(triple);

console.log("Array is : ",arr);
console.log("Double values are : ",output1);
console.log("Triple values are : ",output2);