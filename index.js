const allButtons = document.querySelectorAll('button');
const screenElement = document.querySelector('.screen p');

document.addEventListener('keydown', (event) => {
    const pressedKey = event.key.toLowerCase();

    for (const button of allButtons) {
        if (button.textContent.toLowerCase() === pressedKey) {
            
            switch (pressedKey) {
                case 'esc' :
                    screenElement.textContent += button.textContent;
                    break;
                // Function Keys (F1-F12)
                case pressedKey.startsWith('f'):
                    screenElement.textContent += `F${pressedKey.slice(1)}`;
                    break;
                // Specific keys with custom classes
                case 'backspace':
                    screenElement.textContent += button.textContent;
                    break;

                case 'tab':
                case 'capslock':
                case 'enter':
                case 'shift': 
                case 'ctrl':
                case 'alt':   
                    screenElement.textContent += button.textContent;
                    break;
                // Arrow Keys
                case 'arrowup':
                case 'arrowdown':
                case 'arrowleft':
                case 'arrowright':
                    screenElement.textContent += button.textContent;
                    break;
                // Other Keys
                default:
                    screenElement.textContent += pressedKey;
            }
            break;
        }
    }
});