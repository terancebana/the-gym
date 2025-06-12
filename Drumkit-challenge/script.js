document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    const drumButtons = {
        'w': { sound: 'sounds/crash.mp3', button: document.querySelector('button[data-key="65"]') },
        'a': { sound: 'sounds/kick-bass.mp3', button: document.querySelector('button[data-key="83"]') },
        's': { sound: 'sounds/snare.mp3', button: document.querySelector('button[data-key="68"]') },
        'd': { sound: 'sounds/tom-1.mp3', button: document.querySelector('button[data-key="70"]') },
        'j': { sound: 'sounds/tom-2.mp3', button: document.querySelector('button[data-key="74"]') },
        'k': { sound: 'sounds/tom-3.mp3', button: document.querySelector('button[data-key="75"]') },
        'l': { sound: 'sounds/tom-4.mp3', button: document.querySelector('button[data-key="76"]') }
    };

    if (drumButtons[key]) {
        const { sound, button } = drumButtons[key];
        const audio = new Audio(sound);
        audio.play();
        
        button.classList.add('playing');
        setTimeout(() => {
            button.classList.remove('playing');
        }, 100);
    }
});