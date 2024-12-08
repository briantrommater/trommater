document.addEventListener('DOMContentLoaded', () => {
    // Matrix code effect (unchanged)
    const matrixBg = document.querySelector('.matrix-bg');
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
    let fontSize = 16;
    let columns;
    let drops;

    function initializeMatrix() {
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;
        fontSize = Math.max(12, window.innerWidth / 100);
        columns = Math.floor(matrixCanvas.width / fontSize);
        drops = Array(columns).fill(1);
    }

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
            drops[index] += 0.33;
        });

        requestAnimationFrame(drawMatrix);
    }

    initializeMatrix();
    drawMatrix();

    window.addEventListener('resize', initializeMatrix);

    // Falling leaves effect
    function createLeaf() {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        leaf.style.left = Math.random() * 100 + 'vw';
        leaf.style.animationDuration = 3 + Math.random() * 2 + 's';
        leaf.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(leaf);

        setTimeout(() => {
            leaf.remove();
        }, 7000); // Remove the leaf after animation
    }

    // Add leaves periodically
    setInterval(createLeaf, 2000);
});

// Add this CSS for leaf animations
const style = document.createElement('style');
style.textContent = `
    .leaf {
        position: fixed;
        top: -50px;
        width: 10px;
        height: 10px;
        background-color: white;
        border-radius: 50%;
        opacity: 0.8;
        animation: fall 5s linear infinite;
        pointer-events: none;
    }
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
