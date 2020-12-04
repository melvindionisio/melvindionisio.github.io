
var contactButton = document.querySelector('.contactButton');
var btn = document.querySelector('.trigger');
var icons = document.querySelector('.hide');
var icons2 = document.querySelector('.hide2');
var icons3 = document.querySelector('.hide3');
var triggerIcon = document.getElementById('social');

// getting the screen width
var scrn= screen.width;
var scrnH = screen.height;
var exit = document.getElementById('exit');
var overlay = document.querySelector('.overlay');

var cards = document.querySelector('.slidingCards');

btn.addEventListener('click', collapse);
    function collapse(){
	        contactButton.style.width ="43%"; 
	    	contactButton.style.paddingLeft="150px";
	    	btn.style.backgroundColor="red";
	    	
	    	icons.style.width="100px";
	    	icons.style.height="100px";
	    	icons.style.transitionDelay="0.2s";
	    	
	    	icons2.style.width="100px";
	    	icons2.style.height="100px";
	    	icons2.style.transitionDelay="0.3s";
	    	
	    	icons3.style.width="100px";
	    	icons3.style.height="100px";
	    	icons3.style.transitionDelay="0.4s";
	    	
	    	console.log("working");
	    	
	    	exit.style.right="-70px";
	    	exit.style.zIndex="0";
	    	exit.style.transitionDelay ="0.6s";

    //checking the screensize for mobile devices
    // mobile configuration
    if(scrn <= 400 && scrn >= 300){
    	contactButton.style.width ="50%"; 
        contactButton.style.paddingLeft="65px";
        exit.style.right="-20px";
        
        icons2.style.width="30px";
        icons2.style.height="30px";
        icons2.style.border = "none";
        icons2.style.transitionDelay="0.2s";
        icons.style.width="30px";
        icons.style.height="30px";
        icons.style.border = "none";
        icons.style.transitionDelay="0.1s";
        icons3.style.width="30px";
        icons3.style.height="30px";
        icons3.style.border = "none";
        icons3.style.transitionDelay="0.4s";
        exit.style.right="-30px";
        exit.style.transitionDelay ="-0.5s";
        contactButton.style.transition=".3s";
        
        //contactButton.style.zIndex="-4";
       // exit.style.sIndex="-1";
        overlay.style.zIndex="999999";
        exit.style.height="20px";
        exit.style.width="20px";
        
        
        
       // overlay.style.position="relative";
        btn.style.transitionDelay="-.5s";
        exit.style.opacity="1";
        
        //simple beat animation
        //contactButton.style.animation="attention 1s infinite";
        
        overlay.style.display="inline-block";
        
        overlay.style.left="0";
        
        //window.addEventListener('scroll', noscroll);
       // function noscroll(){
        window.scrollTo(0,0);
       // }
    }    
}

exit.addEventListener('click', exitMe); 

    function exitMe(){

        //checking the screen size
        if(scrn <= 400 && scrn >=300){
            contactButton.style.width ="65px"; 
            contactButton.style.paddingLeft="0px"
            btn.style.backgroundColor="red";

            icons.style.width="0px";
            icons.style.height="0px";
            icons.style.transition = ".3s";
            
            icons2.style.width="0px";
            icons2.style.height="0px";
            icons2.style.transition = ".3s";
            
            icons3.style.width="0px";
            icons3.style.height="0px";
            icons3.style.transition = ".3s";

            exit.style.right="0";
            exit.style.zIndex="-1";
            exit.style.transitionDelay ="0.1s";
            btn.style.backgroundColor = "#212121";
            btn.style.transitionDelay= "0s";
            contactButton.style.transition = ".3s";
            

            console.log(scrnH);
            console.log(scrn);
            
            contactButton.style.animation="none";
            overlay.style.left="-100%";
        }
    else {
    
    contactButton.style.width ="150px"; 
    contactButton.style.paddingLeft="0px"
    btn.style.backgroundColor="red";
    
    icons.style.width="0px";
    icons.style.height="0px";
    icons.style.transition = ".3s";
    
    // icons.style.transitionDelay=".1s";
    
    icons2.style.width="0px";
    icons2.style.height="0px";
    icons2.style.transition = ".3s";
    
    // icons2.style.transitionDelay="0.1s";
    
    icons3.style.width="0px";
    icons3.style.height="0px";
    icons3.style.transition = ".3s";
    
    // icons3.style.transitionDelay="0.3s";
    
    exit.style.right="0";
    exit.style.zIndex="-1";
    exit.style.transitionDelay ="0.2s";
    btn.style.backgroundColor = "#212121";
    btn.style.transitionDelay= ".5s";
    contactButton.style.transition = ".4s";
    console.log(scrn);
    }
}

btn.addEventListener('blur', exitMe);

// var html = document.querySelector('#html');
// html.addEventListener('click', event=>{
// 	html.style.width="100%";
	
// });

// var css = document.querySelector('#css');
// css.addEventListener('click', event=>{
//     css.style.transition ="1s linear";
   
// 	css.style.width="60%";
	
// });

