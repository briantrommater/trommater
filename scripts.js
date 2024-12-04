document.addEventListener('DOMContentLoaded', () => {
    // Add the current year to the footer
    const footer = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} OSINT Services. All rights reserved.`;

    // Randomly select one of the four themes
    const themes = ['matrix-theme', 'satellite-theme', 'digital-grid-theme', 'winter-theme'];
    const selectedTheme = themes[Math.floor(Math.random() * themes.length)];
    document.body.classList.add(selectedTheme);

    // Apply theme-specific logic
    if (selectedTheme === 'matrix-theme') {
        applyMatrixTheme();
    } else if (selectedTheme === 'satellite-theme') {
        applySatelliteTheme();
    } else if (selectedTheme === 'winter-theme') {
        applyWinterTheme();
    }
});

function applyMatrixTheme() {
    const matrixBg = document.querySelector('.dynamic-bg');
    const matrixCanvas = document.createElement('canvas');
    matrixCanvas.id = 'matrixCanvas';
    matrixCanvas.style.position = 'fixed';
    matrixCanvas.style.top = '0';
    matrixCanvas.style.left = '0';
    matrixCanvas.style.width = '100%';
    matrixCanvas.style.height = '100%';
    matrixCanvas.style.zIndex = '-1';
    matrixBg.appendChild(matrixCanvas);

    const ctx = matrixCanvas.getContext('2d');
    const fontSize = 16;
    const columns = Math.floor(window.innerWidth / fontSize);
    const drops = Array(columns).fill(1);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

        ctx.fillStyle = '#00ff00';
        ctx.font = `${fontSize}px monospace`;

        drops.forEach((y, index) => {
            const text = String.fromCharCode(0x30A0 + Math.random() * 96);
            ctx.fillText(text, index * fontSize, y * fontSize);

            if (y * fontSize > matrixCanvas.height || Math.random() > 0.98) {
                drops[index] = 0;
            }
            drops[index]++;
        });

        requestAnimationFrame(drawMatrix);
    }

    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;

    drawMatrix();
}

function applySatelliteTheme() {
    const pins = [
        { top: '20%', left: '30%' },
        { top: '50%', left: '60%' },
        { top: '70%', left: '40%' },
    ];

    const satelliteBg = document.querySelector('.dynamic-bg');
    pins.forEach(pin => {
        const pinElement = document.createElement('div');
        pinElement.classList.add('pin');
        pinElement.style.top = pin.top;
        pinElement.style.left = pin.left;
        satelliteBg.appendChild(pinElement);
    });
}

function applyWinterTheme() {
    const snowContainer = document.querySelector('.dynamic-bg');
    const snowflakeCount = 50;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDelay = `${Math.random() * 10}s`;
        snowContainer.appendChild(snowflake);
    }
}
