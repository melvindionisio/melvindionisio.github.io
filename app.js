var header = document.querySelector('.header');
var button = document.querySelector('.trigger');
var body =document.querySelector('body');
var menu = document.querySelector('.menus');
var front = document.querySelector('.front');

var height = window.screen.availHeight;
button.addEventListener('click', event =>{
   /*  header.style.height = "350px";
    body.style.left = "-200px";
    menu.style.right = "0"; */
    button.classList.toggle('is-active');

   
});
document.querySelector('.about').addEventListener('click', event=>{
    window.scrollTo(0,height);
});

