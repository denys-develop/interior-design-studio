const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active'); 
    body.classList.toggle('no-scroll'); 
})

menu.querySelectorAll('.menu__item-link').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        burger.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});