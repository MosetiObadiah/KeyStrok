const screenElement = document.querySelector('.screen p');

document.addEventListener('keydown', (event) => {
    const pressedKey = event.key;

    const utterance = new SpeechSynthesisUtterance(pressedKey);
    speechSynthesis.speak(utterance);

    screenElement.textContent += pressedKey;
    
})