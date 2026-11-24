function myFunction(){
    console.log("Hello World");
    console.log("Learning JavaScrip");
}
function greet(name){  //prameters
    console.log(`Hello ${name}`);
}
// greet("Jatin"); //arguments
// greet("Pritesh");
// greet("Kapil");

//Funtion to calculate sum of two numbers
// function sum(a,b){
//     console.log(`Sum of ${a} and ${b} is ${a+b}`);
// }

// sum(9,7);
// function sum(a,b){
//     s=a+b;
//     console.log("before return");
//     return s; // thinks after return never execute in funtions
//     console.log("after return");
// }
// let val=sum(8,9);
// console.log(val);

//arrow funtions
const arrowSum=(a,b)=>{
    console.log(a+b);
}
arrowSum(4,4);

const arrowMul=(a,b)=>{
   return a*b;
}
arrowMul(2,5);

const printHello=()=>{
    console.log("Hello");
}


//forEach 

let arr=[1,2,3,4,5];
let arre=["mumbai","jaipus","delhi","chainia"]
//  arr.forEach(function(val){
//     console.log(val);
//  })

  arre.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
 })

 let newarr=arr.map((val)=>{
    return val*val
 })
  let newar=arr.filter((val)=>{
    return val%2===0;
 })

 const out=arr.reduce((res,cur)=>{
    return res+cur;
 })
 const outp=arr.reduce((res,cur)=>{
    return res>cur?res:cur;
 })
 console.log(outp,"outp");
 console.log(out,"out");
 console.log(newarr);
  console.log(newar);