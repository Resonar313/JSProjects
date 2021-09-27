const toggleBtn = document.querySelector('.toggle');
const menuBtn = document.querySelector('.menu');
const iconsBtn = document.querySelector('.icons');

toggleBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    iconsBtn.classList.toggle('active');
});

