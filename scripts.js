document.addEventListener('DOMContentLoaded', () => {
    // Add the current year to the footer
    const footer = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} OSINT Services. All rights reserved.`;

    // Create a falling green code effect
    const matrixBg = document.querySelector('.matrix-bg');

    const matrixCanvas = document.createElement('canvas');
    matrixCanvas.id = 'matrixCanvas';
    matrixCanvas.style.position = 'fixed';
    matrixCanvas.style.top = '0';
    matrixCanvas.style.left = '0';
    matrixCanvas.style.width = '100%';
    matrixCanvas.style.height = '100%';
    matrixCanvas.style.zIndex = '-1'; // Ensure the canvas stays behind the content
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

            if (y * fontSize > matrixCanvas.height || Math.random() > 0.95) {
                drops[index] = 0;
            }
            drops[index]++;
        });

        requestAnimationFrame(drawMatrix);
    }

    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;

    drawMatrix();
});
