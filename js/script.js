const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const marioPossition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPossition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPossition}px`;

        mario.src = "./images/game-over.png";
        clouds.src ="/images/gameover.gif"
        clouds.style.right = '15%';
        clouds.style.width = '800px';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px'

        clouds.style.animation = 'none'
        

        clearInterval(loop);

        
    }
})

document.addEventListener('keydown', jump);