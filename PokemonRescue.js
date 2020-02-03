window.onscroll=function(){myFuntion()};
var navbar=document.getElementById("navbar");
var sticky=navbar.offsetTop;
fuction myFunction(){
    if (window.pageYOffset >=sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}