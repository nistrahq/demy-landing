import VanillaTilt from 'vanilla-tilt';

export function initializeTilt() {
    const elements = document.querySelectorAll('.testimonial-card');
    VanillaTilt.init(elements, {
        max: 12,
        speed: 400,
        glare: true,
        "max-glare": 0.15,
        scale: 1.03,
    });
}
