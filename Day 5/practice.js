// // take a string and count vowels in it through funtions
// function countVowels(str){
//     let cout=0;
//     for( let char of str){
//         if(char==="a" || char==="e" ||char==="i" ||char==="o"||char==="u"){
//             cout++
//         }
//     }
//    return cout;
// }


// // const countVowels=(str)=>{
// //     let cout=0;
// //     for( let char of str){
// //         if(char==="a" || char==="e" ||char==="i" ||char==="o"||char==="u"){
// //             cout++
// //         }
        
// //     }
// //     console.log(cout)
// // }

// let arr=[1,2,3,4,5];
// let cal=(val)=>{
//     console.log(val*val);
// }
// arr.forEach(cal);


// let marks=[99,77,22,101,55];
// let gret=marks.filter((val)=>{
//     return val>90;
// })
// console.log(gret,"gret");

let n=prompt("enter a num:");
let nar=[];
for(let i=1;i<=n;i++){
    nar[i-1]=i;
}
console.log(nar);
let sum=nar.reduce((val,cur)=>{
    return val+cur;
})
console.log(sum);
let pro=nar.reduce((val,cur)=>{
    return val*cur;
})
console.log(pro)