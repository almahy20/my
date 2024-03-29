let menu = document.getElementById("menu")
let links = document.getElementById("#links")

menu.onclick = function(){
menu.classList.toggle('fa-times');
link.classList.toggle('active')
};


let cac =document.getElementById('cac')
window.onscroll = function(){
    if(scrollY >= 300){
        cac.style.display='block';
    }else{
        cac.style.display='none'
    }
}
cac.onclick=function(){
    scroll({
        top:0,
        behavior:"smooth"
    })
}