// 🔹 Array Questions

// Ek array ke sare elements print karo.

// Ek array ka sum nikalo.

// Ek array ke maximum aur minimum element find karo.

// Ek array me se duplicate elements hatao.

// Ek array ko reverse order me print karo.


let arr = [2, 5, 7, 9, 3, -5, 7];

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
printArray(arr);

function reversePrintArray(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i])
    }
}
reversePrintArray(arr);


function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("The sum of all arr numbers : ", sum);
}
sumOfArray(arr);

function maxAndMin(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) max = arr[i];
        if (min > arr[i]) min = arr[i];
    }
    console.log(`The arr max is ${max} & min is ${min}`);
}
maxAndMin(arr);

let arr2 = [12, 45, 7, 12, 89, 23, 45, -5, 67, 7];
function removeDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    console.log(arr)
}
removeDuplicate(arr2);

let prices = [100, 200, 300];
let taxed = prices.map(p => p * 1.18);
console.log(taxed);

let nums = [1, 2, 3, 4];
let even = nums.filter(n => n % 2 === 1);
console.log(even);

let ret = nums.forEach(n => console.log(n * 2));

let total = nums.reduce((acc, val) => acc + val, 0);
console.log(total);
