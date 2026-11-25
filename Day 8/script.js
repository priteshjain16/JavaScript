let but=document.querySelector("button");
// but.onclick=(e)=>{
//     console.log(e);
//     console.log("clicked me now")
//     let a=2;
//     a++;
//     console.log(a);
// }
but.addEventListener("click",()=>{
    console.log("clicked me");
    but.style.backgroundColor="red";
})
but.addEventListener("click",()=>{
    console.log("clicked me3");
    but.style.backgroundColor="red";
})
const hand=()=>{
    console.log("clicked me2");
    but.style.backgroundColor="red";
}
but.addEventListener("click",hand);
but.removeEventListener("click",hand)