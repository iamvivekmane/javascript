const arr = [1, 2, 10, 40, 22, 77];

function isOdd(x)
{
    return x %2==0;
}

function isEven(x)
{
    return x %2!=0;
}

const output1= arr.filter(isOdd);
const output2= arr.filter(isEven);
const output3 = arr.filter((x)=>x>4)

console.log("Array is : ",arr);
console.log("Odd values are : ",output1);
console.log("Even values are : ",output2);
console.log("Values greater then 4 are : ",output3);