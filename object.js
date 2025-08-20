// 🔹 Object Questions

// . Create an object for a book (title, author, price)
// . Access properties using both dot and bracket
// . Write a nested object (user with address and location)
// . Destructure name and age from a student object
// . Loop through keys and values of an object
// . Convert object to array using Object.entries()
// . Copy an object using spread operator
// . Create a deep copy of an object with nested structure
// . Use optional chaining to safely access deep values
// . Use a variable as a key using computed properties

let book = {
    title: "c programing",
    author: "neel bhai",
    price: 299
}

console.log(book.author);
console.log(book["title"]);


let user = {
    name: "dhananjay",
    post: "ias",
    address: {
        city: "mumbai",
        state: "maharashtra"
    }
}

for (const key in user) {
    console.log(key, user[key]);
}

let newuser = { ...user }
newuser.city = "delhi"
console.log(newuser.city);
console.log(user?.city);

let newuser2 = JSON.parse(JSON.stringify({ ...user, isNew: "true" }))
newuser2.city = "bhopal"
console.log(newuser2.city);
console.log(user.address.city);





// 👉 Forms & Validation

// Ek form banao jisme name, email aur password ho. Agar empty ho toh "Fields cannot be empty" ka error show karo.

// Password field me check karo ki password length >= 6 ho.

// Email field me check karo ki email ke andar @ aur .com ho.

// Ek checkbox banao "Accept Terms & Conditions" – bina check kiye form submit na ho.

// Ek program banao jo form submit karne ke baad values ko console me print kare.

// 👉 Timers & Interval

// Ek button banao jo click karne par "Hello" har 2 sec me print kare (setInterval).

// Ek button banao jo click karne par countdown 10 → 1 print kare aur end me "Time’s up!" show kare.

// Ek program likho jo 5 sec ke baad alert kare "Your session expired!".

// Ek clock banao jo har second update hota hai.

// Ek image slider banao jo har 3 sec me image change kare.

// 👉 Local Storage / Session Storage

// Ek program likho jo input box ka data localStorage me save kare aur refresh ke baad bhi dikhaye.

// Ek button banao jo sessionStorage me username store kare aur doosra button jo usse show kare.

// Ek program banao jo user ka theme preference (dark/light) localStorage me save kare.

// Ek form submit karne ke baad data localStorage me store karo.

// Ek button banao jo localStorage clear kare.

// 👉 Cookies

// Ek cookie set karo username=Rahul jo 2 din tak valid ho.

// Ek program banao jo cookie read kare aur alert me show kare.

// Ek form banao jo username ko cookie me store kare.

// Ek button banao jo cookie delete kare.

// Ek program likho jo "Welcome back, [username]" show kare agar cookie already set ho.