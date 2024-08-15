// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const youtubeButton = document.getElementById('youtubeButton');
    const exampleButton = document.getElementById('exampleButton');

    // Check if the buttons exist before adding event listeners
    if (youtubeButton) {
        youtubeButton.addEventListener('click', () => {
            window.open('https://youtube.com/NexusProxy-c4m', '_blank');
        });
    } else {
        console.warn('YouTube button not found.');
    }

    if (exampleButton) {
        exampleButton.addEventListener('click', () => {
            window.open('https://example.com', '_blank');
        });
    } else {
        console.warn('Example button not found.');
    }
});

window.addEventListener('scroll', () => {
    const footer = document.getElementById('footer');

    if (!footer) {
        console.warn('Footer not found.');
        return;
    }

    // Adjust this condition based on how you want the footer to behave
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});