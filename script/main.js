window.addEventListener("keydown",event =>{
    //console.log(event.keyCode); // prints the keyCode at the console
    const audio = document.querySelector(`audio[data-key= "${event.keyCode}"]`); // backtips para colocar o template literal
    const key = document.querySelector(`.key[data-key= "${event.keyCode}"]`)
    if(!audio) return; // stop if audio not founded
    audio.currentTime=0; // rewinds to the start
    audio.play();
    key.classList.add('playing'); // adiciona a classe playing na classe key que faz a animação
})
const keys = document.querySelectorAll('.key');
keys.forEach(keys=>keys.addEventListener('transitionend', event => { // procura o fim do evento transition, que está na classe playing
    /*if (event.propertyName !== 'transform') return; não entendi essa colocação do Wes, ao meu ver
    as outras propriedades que mudam, border-color e box-shadow, também servem como parâmetro */
    keys.classList.remove('playing');
}));
