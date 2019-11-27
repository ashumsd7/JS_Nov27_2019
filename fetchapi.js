console.log("FETCH API JS");

let mybtn = document.getElementById("mybtn");
let content = document.getElementById("content");


// function getData(){
//     console.log("started getData()");
//     url= "https://api.github.com/users";

//     fetch(url).then((response)=>{
//         console.log("Inside first then");

//         return response.json();


//     }).then((data)=>{

//         console.log("Inside 2nd then");
//         console.log(data);

//     })
// }  

// console.log("Before running getData()");
// getData();
// console.log("After running getData()");

function postData() {
    console.log("started getData()");
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"Ramu45d3c443","salary":"123","age":"23"}'
    params = {

        method: 'post',
        headers: {
            'content-Type': 'application/json'
        },
        // body:JSON.stringify(data);   //use this when data is not on
        // form of string here data is in form of string thats why we are not strigyfying it
        body: data
    }

    fetch(url, params).then( response =>  response.json())
    .then( data => console.log(data)

       
        
 
    ) 
}

console.log("Before running getData()");
postData();
console.log("After running getData()");