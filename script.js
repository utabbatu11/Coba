document.addEventListener("DOMContentLoaded", function() {
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

        // Increase font size of the "Yes" button by 1.5x each time
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.5}px`;
    }

    function handleYesClick() {
        const audio = document.getElementById('valentineMusic');
        audio.currentTime = 145; // Set playback time to 2:25 (145 seconds)
        audio.play(); // Play the audio

        setTimeout(() => {
            window.location.href = "yes_page.html"; // Redirect after 500ms
        }, 500);
    }

    function playMusic() {
        const audio = document.getElementById('valentineMusic');
        audio.play();
    }

    // Make functions accessible in HTML
    window.handleYesClick = handleYesClick;
    window.handleNoClick = handleNoClick;
    window.playMusic = playMusic;
});
