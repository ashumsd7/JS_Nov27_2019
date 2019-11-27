console.log("callback func");


//pretend this is the respoce coming from server side
const students= [
    {
        name:"harry",
        subject:"js"
    },
    {
        name:"rohan",
        subject:"ml"
    }
]
function enrollStudent(student,callback)
{
    setTimeout(function() {
        console.log("we r going to push the student");
students.push(student);
callback();

    }, 4000);
}
 

function getStudent()
{
    setTimeout(function() {
         let str="";

         students.forEach(function(student) {
             str+= `<li>  ${student.name}</li>`
         }); 
         document.getElementById('students').innerHTML= str;
console.log("student fetch ho gye");
    }, 2000);
}


let newStudent= {name:"Sunny", subject: "python3"}
enrollStudent(newStudent,getStudent);
//getStudent();
