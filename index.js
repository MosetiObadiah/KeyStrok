const allButtons = document.querySelectorAll('button');

document.addEventListener('keydown', (event) => {
    const pressedKey = event.key.toLowerCase(); // Get the pressed key in lowercase

    for (const button of allButtons) {
        if (button.textContent.toLowerCase() === pressedKey) {
            // Found the matching button
            switch (pressedKey) {
                // Handle function keys (F1-F12)
                case pressedKey.startsWith('f'):
                    console.log(`Function Key Pressed: F${pressedKey.slice(1)}`);
                    break;
                // Handle specific keys with custom classes
                case 'backspace':
                case 'tab':
                case 'caps lock':
                case 'enter':
                case 'shift':  // Handle both left and right shift
                case 'ctrl':  // Handle both left and right ctrl
                case 'alt':   // Handle both left and right alt
                    console.log(`Special Key Pressed: ${button.textContent}`);
                    break;
                // Handle arrow keys
                case 'arrowup':
                case 'arrowdown':
                case 'arrowleft':
                case 'arrowright':
                    console.log(`Arrow Key Pressed: ${button.textContent}`);
                    break;
                // Handle other keys
                default:
                    console.log(`Key Pressed: ${button.textContent}`);
            }
            break; // Exit the loop after finding the matching button
        }
    }
});
