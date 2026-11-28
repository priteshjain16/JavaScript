// const student={
//     fullName:"Pritesh Jain",
//     age:22,
//     marks:99,
//     printMarks:function(){
//         console.log("marks=",marks);
//     }
// }

const employee={
    claTax(){
        console.log("tax rate is 10%");
    },
}

const karnArjun={
    salary:50000,
    claTax(){
        console.log("tax rate is 40%");
    },
}
karnArjun.__proto__=employee;

class toyotaCar{
    start(){
        console.log("start")
    }

    stop(){
        console.log("Stop")
    }
}

let fortuner=new toyotaCar();
let maruti=new toyotaCar();