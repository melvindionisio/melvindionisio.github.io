var header = document.querySelector('.header');
var button = document.querySelector('.trigger');
var body =document.querySelector('body');
var menu = document.querySelector('.menus');
var front = document.querySelector('.front');

var count = 0;
var height = window.screen.availHeight;
button.addEventListener('click', event =>{
    body.style.left = "-80px";
    button.style.right = "105px";
    button.classList.toggle('is-active');
   
    count = count+1;
    if(count % 2 === 0){
        body.style.left = "0";
        button.style.right = "25px";
    }

});
document.querySelector('.about').addEventListener('click', event=>{
    window.scrollTo(0,height);
});
