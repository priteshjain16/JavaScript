let head=document.querySelector("h2");
console.dir(head);
head.innerText=head.innerText+" from apna college students";

let bo=document.querySelectorAll(".box");
console.log(bo);

let idx=0
for(div of bo){
    div.innerText=`new ${idx}`;
    idx++;
}