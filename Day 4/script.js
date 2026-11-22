let marks=[22,23,24,25,25,26,27,83,88,99];
console.log(marks);
let superheros=["ironman","spider man","thor","ant man","captain america", "hulk"];
console.log(superheros);

// for(let ind=0;ind<superheros.length;ind++){
//     console.log(superheros[ind]);
// } for loop
for(let inx of superheros){
    console.log(inx);
}
superheros.push("doctor strange");
let deleted=superheros.pop();
console.log(superheros);
console.log(deleted);
console.log(superheros.toString());
console.log(marks.toString());
let newarray=superheros.concat(marks);
console.log(newarray);
superheros.unshift("raju");
console.log(superheros);
superheros.shift();
console.log(superheros);
console.log(marks.slice(2,7));

let num=[1,2,3,4,5,6,7,8];

console.log(num.splice(2,2,10,11));
console.log(num);