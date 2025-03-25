var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons;i++){
    document.querySelectorAll(".drum") [i].addEventListener("click", function () {
       var buttonInnerHtml = this.innerHTML;
       makeSound(buttonInnerHtml);
       buttonAnimation(buttonInnerHtml);
         
    });
    
    }
    document.addEventListener("keydown", function(event){
        makeSound(event.key);
        buttonAnimation(event.key)}
    );
    function makeSound(key){
        switch (key) {
            case "w":
            var kick = new Audio('sounds/kick-bass.mp3')
                kick.play();
                break;
            
          
            case "a":
            var snare = new Audio("sounds/snare.mp3")
                snare.play();
                break;
            
            case "s":
            var crash = new Audio("sounds/crash.mp3")
                crash.play();
                break;
            
            case "d":
            var tom1 = new Audio("sounds/tom-1.mp3")
                tom1.play();
                break;
    
             case "j":
                var tom2 = new Audio("sounds/tom-2.mp3")
                tom2.play();
                break;
           
            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3")
                tom3.play();
                 break;

            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3")
                tom4.play();
                break;

            case "q":
                var hihat = new Audio("sounds/hihat.wav")
                hihat.play();
                break;

            default: console.log(buttonInnerHtml);
        
        }
    }
    function buttonAnimation (currentKey){
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");
       setTimeout(function() {
        activeButton.classList.remove("pressed")}
        ,100)}
 

