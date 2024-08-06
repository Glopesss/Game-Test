const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.clouds');

const jump = () =>{
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 503);
}

document.addEventListener('keydown', jump);


const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const cloudPosition = cloud.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 84){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '33px';
        
        clearInterval(loop);
    }

}, 10);