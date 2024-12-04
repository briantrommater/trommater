document.addEventListener('DOMContentLoaded', () => {
    // Add the current year to the footer
    const footer = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} OSINT Services. All rights reserved.`;

    // Add glowing pins to the map
    const pins = [
        { top: '20%', left: '30%' },
        { top: '50%', left: '60%' },
        { top: '70%', left: '40%' },
    ];

    const satelliteBg = document.querySelector('.satellite-bg');

    pins.forEach(pin => {
        const pinElement = document.createElement('div');
        pinElement.classList.add('pin');
        pinElement.style.top = pin.top;
        pinElement.style.left = pin.left;
        satelliteBg.appendChild(pinElement);
    });
});
