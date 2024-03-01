let aside = document.getElementsByClassName("aside");
let min = document.getElementById("min").style{"color","red"};

min.onclick = function() {
    min.classList.toggle("active")
    aside.classList.toggle("")

}