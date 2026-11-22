// // sum of marks in an arrays 
// let marks=[99,98,89,67,88,44];
// let sum=0;
// for(let val of marks){
//     sum+=val;
// }
// let avg=sum/marks.length
// console.log("sum=",avg);

// minus the discout and put it in array 
// let items=[600,700,988,786,400];
// for(let i=0;i<items.length;i++){
//     let offer=items[i]/10;
//     items[i]=items[i]-offer;
//     console.log(`the price of item after offer of 10% discout is ${items[i]}`);
// }
// whit for of loop 
// i=0;
// for (let val of items){
//     let offer=val/10;
//     items[i]=items[i]-offer;
//     console.log(`prices after offer is ${items[i]}`);
//     i++;
// }

let companis=["Bloomber","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companis);
companis.shift();
console.log(companis);
companis.splice(1,1,"Ola");
console.log(companis);
companis.push("Amazon");
console.log(companis);