let MenuBtn=document.getElementById("MenuBtn");
MenuBtn.addEventListener("click",function(e){
    document.querySelector("body").classList.toggle("movile-nav-active");
    this.classList.toggle("fa-xmark");
})

let typed=new Typed("#auto-input",{
    strings:["Front-End Developer!","Web Designer!","Django Developer!"],
    typeSpeed:90,
    backSpeed:90,
    backDelay:100,
    loop:true,
})