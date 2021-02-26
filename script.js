const player = document.getElementById("player");

    setTimeout(function(){
        player.muted = true 
        player.volume = 0;
        player.play();
        player.muted = false
    }, 500);
