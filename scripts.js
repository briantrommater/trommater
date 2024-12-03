// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add a dynamic date to the footer
    const footer = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} OSINT Services. All rights reserved.`;

    // Add a hover effect to headers
    const headers = document.querySelectorAll('h2');
    headers.forEach(header => {
        header.addEventListener('mouseover', () => {
            header.style.color = '#005f99';
        });

        header.addEventListener('mouseout', () => {
            header.style.color = '#007acc';
        });
    });

    // Add a button click alert
    const contactButton = document.querySelector('.btn');
    contactButton.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Thanks for your interest! Please send us an email at briantrommater@protonmail.com.');
    });
});
