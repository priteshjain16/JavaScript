// Arethematic operators 
let a=17;
let b=8;
console.log("Arethematic operators")
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);   

console.log("Urinary Operators")
// a++;
// b--;
console.log(a++);
console.log(--b);
console.log("Assignment Operators");
a=10;
console.log(a+=5);
console.log(a-=5);
console.log(a*=5);
console.log(a /=2);
console.log(a %=5);
console.log(a **=5);
console.log("Comparision Operators");
a=10;
b=20;
console.log(a==b);
console.log(a<b);
console.log(a>b);
console.log(a>=b);
console.log(a<=b);
console.log(a!=b);
console.log("5"!==5);
console.log("5"===5);

console.log("Logical Operators");
a=10;
b=22;
let cond1=a>b;
let cond2=a==b;
console.log(cond1 && cond2);
console.log(cond1 || cond2);
console.log(! cond2);
// Always use === to rather than == 

console.log("Conditional Statements");
let age=66;
if(age>=18){
    console.log("Can vote");
}
let mode="white";
let color;
if(mode==="black"){
    color="dark";
}
if(mode==="white"){
    color="light";
}
console.log(color);

if(age===18){
    console.log("you are adult");
}else if(age>60){
    console.log("very old to vote")
}else{
    console.log("you are not adult");
}
let num=2;
if(num%2===0){
    console.log("even");
}else{
    console.log("odd");
}

if(num===2) console.log(num);

console.log("Ternarry Operators");
let resut=age > 18?"adult":"not adult";
console.log(resut);
age > 18?console.log("adult"):console.log("not adult");
// this is a simple form of if else conditions statements 

console.log("Switch statements");
let day="1";
switch(day){
    case '1':
        console.log("monday");
        break;
    case '2':
        console.log("Tuesday");
        break;
    default:
        console.log("enter number between 1 and 2 only");
}
alert("hello users") 
// one time message and prompt is used to take input form user













