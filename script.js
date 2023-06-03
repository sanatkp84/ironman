score = 00000;
cross = true;

document.onkeydown = function(e){
    console.log("Key code is :", e.keyCode)
    if(e.keyCode==38){
        ironman = document.querySelector('.ironman');
        ironman.classList.add('animateIronman');
        setTimeout(()=>{
            ironman.classList.remove('animateIronman')
        },700)
    }
}

setInterval(()=>{
    ironman = document.querySelector('.ironman');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    ix = parseInt(window.getComputedStyle(ironman,null).getPropertyValue('left'));
    iy = parseInt(window.getComputedStyle(ironman,null).getPropertyValue('top'));

    dx = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX = Math.abs(ix-dx);
    offsetY = Math.abs(iy-dy);

    if(offsetX< 110 && offsetY< 52){
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni')

        audiogo = new Audio('overmusic.mp3');
    }
    else if(offsetX< 145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
       setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.001;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
    
    }
},100);

function updateScore(score){
    scoreCont.innerHTML = "Your Score:" + score
}