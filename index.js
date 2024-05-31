const allButtons = document.querySelectorAll('button');
const screenElement = document.querySelector('.screen p'); // Select the paragraph inside the screen div

document.addEventListener('keydown', (event) => {
    const pressedKey = event.key.toLowerCase();

    for (const button of allButtons) {
        if (button.textContent.toLowerCase() === pressedKey) {
            // Found the matching button
            switch (pressedKey) {
                // Function Keys (F1-F12)
                case pressedKey.startsWith('f'):
                    screenElement.textContent += `F${pressedKey.slice(1)}`;
                    break;
                // Specific keys with custom classes
                case 'backspace':
                case 'tab':
                case 'caps lock':
                case 'enter':
                case 'shift':  // Handle both left and right shift
                case 'ctrl':  // Handle both left and right ctrl
                case 'alt':   // Handle both left and right alt
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
            break; // Exit the loop after finding the matching button
        }
    }
});
