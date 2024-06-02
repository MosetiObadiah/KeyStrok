const screenElement = document.querySelector('.screen p');

document.addEventListener('keydown', (event) => {
    const pressedKey = (event.key);
    const utterance = new SpeechSynthesisUtterance(pressedKey);
    speechSynthesis.speak(utterance);

    screenElement.textContent += pressedKey;
})

const inputTrigger = document.querySelector('.input-trigger');

inputTrigger.addEventListener('click', () => {
    
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'text';
    hiddenInput.style.position = 'absolute';
    hiddenInput.style.left = '-9999px';

    document.body.appendChild(hiddenInput);
    hiddenInput.focus();


    
    setTimeout(() => {
        document.body.removeChild(hiddenInput);
    }, 100); 
});