function greetfunc(username, role) {
    this.username = username;
    this.role = role;
};

let greet1 = new greetfunc("neel", "sd");
console.log(greet1.role);
console.log("greet");




// callback
function fetchData(callback) {
    console.log("Fetching data...");

    setTimeout(() => {
        let data = { user: "Dhananjay", role: "Student" };
        callback(data); // call the callback function
    }, 5000);
}

function displayData(info) {
    console.log("User:", info.user);
    console.log("Role:", info.role);
}

// using the callback pattern
fetchData(displayData);




// promise | async-await
let myPromise = new Promise((resolve, reject) => {
    let success = false;

    if (success) {
        resolve("Kaam ho gaya ✅");
    } else {
        reject("Error aa gaya ❌");
    }
});

myPromise
    .then(result => console.log(result))   // agar resolve hua
    .catch(error => console.log(error));  // agar reject hua


async function func() {
    try {
        let res = await print;
        console.log(res);
    } catch (error) {
        console.log("async", error);

    }
}

func()