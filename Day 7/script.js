let div=document.querySelector("div");
console.log(div);
div.style.backgroundColor="red";
div.style.borderRadius="50%";
div.style.fontSize="4em";
div.innerText="Pritesh Jain";
// div.style.visibility="hidden";
// let id=div.getAttribute("id");
// console.log(id);
// let newid=div.setAttribute("id","new");
// console.log(newid);

let newBtn=document.createElement("button");
console.log(newBtn);
newBtn.innerText="click me";
div.after(newBtn);

let head=document.createElement("h1");
head.innerHTML="<I>Hello</I>";
document.querySelector("body").prepend(head);
// newBtn.remove();