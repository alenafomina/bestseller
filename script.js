const player = document.getElementById("player");
window.addEventListener("load", function(){
    setTimeout(function(){ 
        player.volume = 0;
        player.play();
    }, 500);
});