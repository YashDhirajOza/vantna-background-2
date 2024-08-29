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

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.bird-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        setTimeout(() => {
            card.style.transition = 'opacity 1s ease, transform 1s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 500 * (index + 1));
    });
});
