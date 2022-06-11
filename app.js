const menuBtn = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})