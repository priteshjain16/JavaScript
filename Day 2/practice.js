let num=prompt("Enter a number:");
if(num%5===0){
    console.log(num,"Divisible of 5");
}else{
    console.log(num,"Note divisible of 5");
}
let grade=prompt("enter number between 1 to 100:");
if(grade>=80 && grade<=100){
    console.log("A+");
}else if(grade>=70 && grade<=79){
    console.log(grade,"A")
}else if(grade>=60 && grade<=69){
    console.log(grade,"B");
}else if(grade>=40 && grade<=59){
    console.log(grade,"C");
}else if(grade>=20 && grade<=39){
    console.log(grade,"Fale");
}
else{
    console.log("give paper again")
}
console.log("your grade is",grade);