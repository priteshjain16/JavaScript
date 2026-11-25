let but=document.querySelector("button");
let bo=document.querySelector("body");
let mode="light";
let di=document.querySelector("div");
di.addEventListener("click",()=>{
    di.style.backgroundColor="red";
    di.style.height="250px";
    di.style.width="250px";
})
but.addEventListener("click",()=>{
    if(mode==="light"){
        mode="dark";
        bo.style.backgroundColor="black";
    }
    else{
        mode="light";
        bo.style.backgroundColor="white";
    }
    console.log(mode);
})

