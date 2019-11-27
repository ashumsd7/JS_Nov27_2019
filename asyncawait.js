console.log("lets study async and await");


//
async function harry() {
    console.log("Inside fun harry");

    const response = await fetch("https://api.github.com/users");

    console.log("before response");

    const users= await response.json();

    console.log("users resolved");
    
    return users;

    
}

console.log("before calling harry");
//a is promise because a returns A promise always
let a = harry();

console.log("after calling harry");

console.log(a);
a.then(data => console.log(data))

console.log("last line of js file");
