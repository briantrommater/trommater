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
    let fontSize = 16;
    let columns;
    let drops;

    function initializeMatrix() {
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;
        fontSize = Math.max(12, window.innerWidth / 100); // Adjust font size for smaller screens
        columns = Math.floor(matrixCanvas.width / fontSize);
        drops = Array(columns).fill(1); // Reset drops
    }

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

        ctx.fillStyle = '#00ff00';
        ctx.font = `${fontSize}px monospace`;

        drops.forEach((y, index) => {
            const text = String.fromCharCode(0x30A0 + Math.random() * 96);
            ctx.fillText(text, index * fontSize, y * fontSize);

            // Move the drop down at half speed
            if (y * fontSize > matrixCanvas.height || Math.random() > 0.98) {
                drops[index] = 0; // Reset drop to the top
            }
            drops[index] += 0.33; // Slower increment for half speed
        });

        requestAnimationFrame(drawMatrix);
    }

    // Initialize the Matrix Effect
    initializeMatrix();
    drawMatrix();

    // Handle Window Resizing
    window.addEventListener('resize', () => {
        initializeMatrix();
    });
});
