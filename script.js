window.addEventListener("scroll", reveal);
function reveal(){
 var reveals= document.querySelectorAll(".reveal");
 for (var i =0; i<reveals.length; i++){
   var windowHeight= window.innerHeight;
   var revealtop= reveals[i].getBoundingClientRect().top;
   var revealpoint= 150;
   if(revealtop< windowHeight- revealpoint){
     reveals[i].classList.add("active")
   }
}}
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('show');
});