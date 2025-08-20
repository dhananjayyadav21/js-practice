// 1. Ek function banao jo 2 numbers ka sum return kare.

// 2. Ek function banao jo factorial calculate kare.

// 3. Ek function banao jo string ko reverse kare.

// 4. Ek function banao jo check kare ki given string palindrome hai ya nahi.

// 5. Ek function banao jo array ka maximum number return kare.

function sumOfTwoNumber(num1, num2) {
    return num1 + num2;
}
let sum = sumOfTwoNumber(2, 5);
console.log(sum);


let factorial = function (num) {
    let fact = 1;
    for (let i = num; i > 0; i--) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(4));

let reverseString = function (str = "Example") {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}
console.log(reverseString("dhananjay"));


let isPalindrome = (str = "oppo") => {
    let reverse = [...str].reverse().join("");
    return reverse;
}
console.log(isPalindrome());


let newArray = [6, 5, 48, 2, 65, 698, 457, 21, 100, 678];
let getMaximumOfArray = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i])
            max = arr[i];
    }
    return max;
}
console.log(getMaximumOfArray(newArray));

