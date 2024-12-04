document.addEventListener('DOMContentLoaded', () => {
    // Add the current year to the footer
    const footer = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} OSINT Services. All rights reserved.`;

    // Add lens flare effect
    const lensFlareBg = document.querySelector('.lens-flare-bg');
    const lensFlare = document.createElement('div');
    lensFlare.classList.add('lens-flare');
    lensFlareBg.appendChild(lensFlare);
});
