let burger = document.querySelector('.burger');
let navLinks = document.querySelector('.nav-links');
let close = document.querySelector('.close');
let links = document.querySelectorAll('.nav-links a');

burger.addEventListener('click', () => {
    navLinks.classList.add('open');
    close.style.display = 'block';
    burger.style.display = 'none';
})

close.addEventListener('click', () => {
    navLinks.classList.remove('open')
    close.style.display = 'none';
    burger.style.display = 'block'
});

links.addEventListener('click', () => {
    navLinks.classList.remove('open');
    // close.style.display = 'none';
    burger.style.display = 'block';
})