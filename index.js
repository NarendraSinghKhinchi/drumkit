// document.querySelectorAll(".drum").addEventListener("click" , handleclick) ;
 var drums = document.getElementsByClassName("drum");
 
 for(var i = 0 ; i < drums.length ; i++){

    drums[i].addEventListener("click" , handleclick) ; 
 }
var audio ;
function handleclick(){
    var key = this.innerHTML ;
    makeSound(key);
    addAnimation(key);
}
document.addEventListener("keydown" , function(event){
    makeSound(event.key);
    addAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case 'w':
            audio = new Audio("sounds/tom-1.mp3") ;
            audio.play();
            break;
        case 'a':
            audio = new Audio("sounds/tom-2.mp3") ;
            audio.play();
            break;
        case 's':
             audio = new Audio("sounds/tom-3.mp3") ;
            audio.play();
        break;
        case 'd':
            audio = new Audio("sounds/tom-4.mp3") ;
            audio.play();
            break; 
        case 'j':
            audio = new Audio("sounds/snare.mp3") ;
            audio.play();
            break;
        case 'k':
            audio = new Audio("sounds/crash.mp3") ;
            audio.play();
            break;
        case 'l':
            audio = new Audio("sounds/kick.mp3") ;
            audio.play();
            break;        
        default:
            break;
    }
}
function addAnimation(key){
    var keyclass = "." + key ;
    document.querySelector(keyclass).classList.add("game-over");
    setTimeout(function () {
        document.querySelector(keyclass).classList.remove("game-over");
    }, 500);
}