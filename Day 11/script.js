// const student={
//     fullName:"Pritesh Jain",
//     age:22,
//     marks:99,
//     printMarks:function(){
//         console.log("marks=",marks);
//     }
// }

// const employee={
//     claTax(){
//         console.log("tax rate is 10%");
//     },
// }

// const karnArjun={
//     salary:50000,
//     claTax(){
//         console.log("tax rate is 40%");
//     },
// }
// karnArjun.__proto__=employee;

// class toyotaCar{
//     constructor (brand,milage){
//         console.log("creating new object");
//         this.brandName=brand;
//         this.milage=milage;
//     }
//     start(){
//         console.log("start")
//     }

//     stop(){
//         console.log("Stop")
//     }
//     // setBrand(brand){
//     //     this.brandName=brand;
//     // }
// }

// let fortuner=new toyotaCar("fortuner",22);
// console.log(fortuner);
// // fortuner.setBrand("fortuner");
// let maruti=new toyotaCar("maruti",42);
// console.log(maruti);

//inheritence
class parent{
    hello(){
        console.log("hello world")
    }
}
class child extends parent{
    constructor (branch){
        super();
        this.branch=branch;
    }
    work(){
        console.log("Work");
    }
}

let obj1=new child("bTech");

let a=22;
let b=44;
console.log(a+b);
console.log(a==b);
try{
    console.log(a*c);
}catch(err){
    console.log(err);
}

console.log(a-b);