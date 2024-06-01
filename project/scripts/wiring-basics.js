document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const nav = document.querySelector("header nav");

    hamburgerMenu.addEventListener("click", function() {
        nav.classList.toggle("open");
    });
    

    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;

    const socialMediaLinks = [
        { href: 'https://facebook.com', src: 'images/facebook.png', alt: 'Facebook' },
        { href: 'https://twitter.com', src: 'images/twitter.png', alt: 'Twitter' },
        { href: 'https://instagram.com', src: 'images/instagram.png', alt: 'Instagram' }
    ];

    const socialMediaContainer = document.querySelector('.social-media');

    socialMediaLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.target = '_blank';
        const img = document.createElement('img');
        img.src = link.src;
        img.alt = link.alt;
        img.className = 'social-icon';
        img.loading = 'lazy';

        a.appendChild(img);
        socialMediaContainer.appendChild(a);
    });
});

