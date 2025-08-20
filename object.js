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


