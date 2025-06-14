document.addEventListener('keydown', function(event) {
    const keyPressed = event.key.toLowerCase();

    switch (keyPressed) {
        case 'w':
            playDrum('sounds/crash.mp3', 'w-key');
            break;
        case 'a':
            playDrum('sounds/kick-bass.mp3', 'a-key');
            break;
        case 's':
            playDrum('sounds/snare.mp3', 's-key');
            break;
        case 'd':
            playDrum('sounds/tom-1.mp3', 'd-key');13
            break;
        case 'j':
            playDrum('sounds/tom-2.mp3', 'j-key');
            break;
        case 'k':
            playDrum('sounds/tom-3.mp3', 'k-key');
            break;
        case 'l':
            playDrum('sounds/tom-4.mp3', 'l-key');
            break;
        default:
            break;
    }
});

function playDrum(soundPath, buttonDataKey) {
    const audio = new Audio(soundPath);
    audio.play();

    const drumButton = document.querySelector(`button[data-key="${buttonDataKey}"]`);

    if (drumButton) {
        drumButton.classList.add('playing');
        setTimeout(() => {
            drumButton.classList.remove('playing');
        }, 100);
    }
}