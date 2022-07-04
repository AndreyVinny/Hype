let menu = document.querySelector('.nav_cont'),
    burger = document.querySelector('.ham_menu'),
    nav_logo = document.querySelector('.nav_logo'),
    body = document.querySelector('body');

    
burger.addEventListener('click', AddActive)

function AddActive () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active');
    nav_logo.classList.toggle('active');

}

let navLink = document.querySelectorAll('.nav_item');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu () {
    burger.classList.remove('active');
    menu.classList.remove('active');
    body.classList.toggle('active');
    nav_logo.classList.toggle('active');
}
