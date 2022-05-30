for(var i=0; i<document.querySelectorAll(".drum").length; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function () {
playsound(this.innerHTML);
lightbotton(this.innerHTML);
}) ;}
addEventListener("keydown",function(event){
playsound(event.key);
lightbotton(event.key);
});
function playsound(key){
  if(key=="w"){

    var audio = new Audio('sounds/crash.mp3');
  }
  if(key=="a"){
    var audio = new Audio('sounds/kick-bass.mp3');
  }
  if(key=="s"){
    var audio = new Audio('sounds/snare.mp3');
  }
  if(key=="d"){
    var audio = new Audio('sounds/tom-1.mp3');
  }
  if(key=="j"){
    var audio = new Audio('sounds/tom-2.mp3');
  }
  if(key=="k"){
    var audio = new Audio('sounds/tom-3.mp3');
  }
  if(key=="l"){
    var audio = new Audio('sounds/tom-4.mp3');
  }
  audio.play();

}
function lightbotton(key){
var active= document.querySelector("."+key);
active.classList.add("pressed");
setTimeout(function(){active.classList.remove("pressed");
},100);

}
