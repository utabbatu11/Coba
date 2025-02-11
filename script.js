const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please!❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Increase font size of the "Yes" button, but with a limit
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    const newSize = currentSize * 1.5;
    yesButton.style.fontSize = newSize > 50 ? "50px" : `${newSize}px`; // Limit the font size to 50px
}

function handleYesClick() {
    const audio = document.getElementById('valentineMusic');
    audio.currentTime = 145; // Set playback time to 2:25 (145 seconds)
    audio.play(); // Ensure the audio starts playing

    setTimeout(() => {
        window.location.href = "yes_page.html"; // Redirect to the "Yes" page after 500ms
    }, 500); // Wait 500ms to ensure the audio starts playing before redirecting
}

function playMusic() {
    const audio = document.getElementById('valentineMusic');
    audio.play(); // Play the audio when the button is clicked
}
