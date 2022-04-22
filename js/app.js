const btn_on = document.querySelector('.btn_on');
const btn_off = document.querySelector('.btn_off');
const led_on = document.querySelector('.battery_point');
const animation_nintendo = document.querySelector('.animated-text');
const green_screen = document.querySelector('.green_screen');
const audio = document.querySelector('audio');

// Play Sound
function playSound () {
    audio.currentTime = 0;
    audio.play();
  }

btn_on.addEventListener ('click', () => {
    led_on.classList.add('power-on');
    animation_nintendo.classList.add('end');
    green_screen.classList.add('active');

    if(animation_nintendo){
        const myTimeout = setTimeout(playSound, 3000);
    }
});

btn_off.addEventListener ('click', () => {
    led_on.classList.remove('power-on');
    animation_nintendo.classList.remove('end');
    green_screen.classList.remove('active');
    
})

