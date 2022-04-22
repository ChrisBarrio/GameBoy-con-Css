const btn_encendido = document.querySelector('.btn_on');
const led_on = document.querySelector('.battery_point');
const animation_nintendo = document.querySelector('.animated-text');

btn_encendido.addEventListener ('click', () => {
    led_on.classList.toggle('power-on')
    animation_nintendo.classList.toggle('end')
})