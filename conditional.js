//1. Ek program banao jo check kare ki number positive, negative ya zero hai.
if (num > 0) {
    console.log("Number is positive ")
} else if (num < 0) {
    console.log("Number is negative")
} else {
    console.log("Number is zero")
}


// 2. User se ek number lo aur check karo ki odd hai ya even.
if (num % 2 === 0) {
    console.log("Number is even")
} else {
    console.log("Number is odd")

}

//3. Ek grading system banao:
// Marks > 90 → "A"
// Marks 75–89 → "B"
// Marks 50–74 → "C"
// Marks < 50 → "Fail"
let obtainedGrade = Marks >= 90 ? "A" : (Marks >= 75 && Marks < 90) ? "B" : (Marks >= 50 && Marks < 75) ? "C" : "Fail"
console.log(obtainedGrade);

//4. Ek program banao jo teen numbers me se largest number print kare.
let num1 = prompt("Enter a num1 : ")
let num2 = prompt("Enter a num2 : ")
let num3 = prompt("Enter a num3 : ")

if (num1 > num2 && num1 > num3) {
    console.log("Num 1 is grater")
} else if (num2 > num1 && num2 > num3) {
    console.log("Num 2 is grater")
} else {
    console.log("Num 3 is grater")
}

//5. Ek ATM program banao jisme user balance check, withdraw aur deposit kar sake (switch case use karo).
let balance = 25000
console.log("Please choose a options\n 1. Check your balance\n 2. Withdraw your amount\n 3. Deposite your amount\n");
let num = Number(prompt("Enter a num : "))
switch (num) {
    case 1:
        console.log(`Your bank balance is ${balance}`);
        break;
    case 2:
        let witdrawAmount = Number(prompt("How much amount witdraw "));
        if (witdrawAmount < balance) {
            balance -= witdrawAmount;
            console.log(`You witdraw ${witdrawAmount} amount\n Your balance is ${balance}....`);
        } else {
            console.log(`Insufficient balance ${balance}...`)
        }
        break;
    case 3:
        let depositAmount = Number(prompt("How much amount deposit"));
        balance += depositAmount;
        console.log(`You deposite ${depositAmount} amount\n Your balance is ${balance}....`);
        break;

    default:
        console.log("plese choose valid options ")
        break;

}




