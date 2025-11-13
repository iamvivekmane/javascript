const arr = [1, 2, 110, 44, 22];

const output1 = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

const output2 = arr.reduce(function (acc, curr) {
    if (curr> acc) {
       acc = curr;
    }
    return acc;
}, 0);


console.log("The array is ", arr);
console.log("The sum of the array is ", output1);
console.log("The greatest value in the array is ", output2);






// function greatest(arr) {
//     let greatest = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i + 1] > arr[i]) {
//             greatest = arr[i + 1];
//         }
//     }
//     return greatest;
// }

// console.log(greatest(arr));