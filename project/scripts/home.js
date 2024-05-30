
const galleryItems = [
    { src: 'images/safety.jpg', alt: 'Img of electrical safety', description: 'Safety' },
    { src: 'images/wiring.jpg', alt: 'Img of wiring', description: 'Wiring' },
    { src: 'images/troubleshooting.jpg', alt: 'Img of troubleshooting', description: 'Troubleshooting' },
    { src: 'images/circuit.avif', alt: 'Img of circuits', description: 'Circuits' },
    { src: 'images/tools.avif', alt: 'Img of tools', description: 'Tools' },
    { src: 'images/workingPartners.jpg', alt: 'Img of working partners', description: 'Working Partners' }
];


const galleryContainer = document.getElementById('gallery');


galleryItems.forEach(item => {
    const div = document.createElement('div');
    div.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;

    const p = document.createElement('p');
    p.textContent = item.description;

    div.appendChild(img);
    div.appendChild(p);
    galleryContainer.appendChild(div);
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

    a.appendChild(img);
    socialMediaContainer.appendChild(a);
});

document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const nav = document.querySelector("header nav");

    hamburgerMenu.addEventListener("click", function() {
        nav.classList.toggle("open");
    });
});