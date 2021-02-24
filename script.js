const player = document.getElementById("player");
window.addEventListener("load", function(){
    setTimeout(function(){ 
        video.volume = 0;
        player.play();
    }, 500);
});