console.log("hello I PROMISE you that u will learn promises")


function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {

            const error = true;
            if (!error) {
                console.log("Server: your Promise has been resolved");
                resolve();
            }
            else {
                console.log("Server: Your Promise has not resolved Sorry");
                reject("sorry");
            }


        }, 2000);
    })
}

func1().then(function(){

console.log("Client: Thanks by Client")

}).catch(function(error1){
    console.log("Client: Very Bad" +error1)
})