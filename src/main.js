const menuIcon = document.getElementById('menu-button');
const closeIcon = document.getElementById('close-button');
const navMenu = document.getElementById('nav-menu');

//Navigation Menu Toggle

menuIcon.addEventListener('click', () => {
    navMenu.classList.remove('hidden');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
});

closeIcon.addEventListener('click', () => {
    navMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
});