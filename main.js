const menuHamIcon = document.querySelector('.nav__rigth__hamburguer');
const mobileMenu = document.querySelector('.mobileMenu');
const btnSwitch = document.querySelector('#switch')
const btnDesktopSwitch = document.querySelector('#switch__desktop')

menuHamIcon.addEventListener('click', toggleMobileMenu);

btnSwitch.addEventListener('click',() => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
})

btnDesktopSwitch.addEventListener('click',() => {
    document.body.classList.toggle('dark');
    btnDesktopSwitch.classList.toggle('active');
})

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}