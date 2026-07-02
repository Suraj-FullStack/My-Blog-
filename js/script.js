window.addEventListener("scroll",()=>{

const nav=document.querySelector("header");

if(window.scrollY>50){
nav.classList.add("sticky");
}else{
nav.classList.remove("sticky");
}

});