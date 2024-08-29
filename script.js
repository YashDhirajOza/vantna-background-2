// Initialize VANTA Effect
VANTA.BIRDS({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x0,
    color1: 0xff00ff,
    color2: 0x00ffff,
    colorMode: "lerpGradient",
    birdSize: 1.50,
    wingSpan: 30.00,
    separation: 50.00,
    alignment: 30.00,
    cohesion: 30.00,
    quantity: 4.00
});

// Scroll Animation Functionality
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.scroll-animation');

    const scrollAnimation = () => {
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            if (position.top < window.innerHeight - 100) {
                element.classList.add('visible');
                element.classList.remove('hidden');
            }
        });
    };

    window.addEventListener('scroll', scrollAnimation);
    scrollAnimation(); // Run on load
});
