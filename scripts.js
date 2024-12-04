document.addEventListener('DOMContentLoaded', () => {
    // Add the current year to the footer
    const footer = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} OSINT Services. All rights reserved.`;

    // Snowflake Effect
    const snowContainer = document.querySelector('.snow-bg');
    const snowflakeCount = 50; // Adjust this number for more or fewer snowflakes

    // Create snowflakes
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDelay = `${Math.random() * 10}s`;
        snowflake.style.fontSize = `${Math.random() * 1.5 + 0.5}em`;
        snowflake.innerText = '❄';
        snowContainer.appendChild(snowflake);
    }
});
