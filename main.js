const menuHamIcon = document.querySelector('.nav__rigth__hamburguer');
const mobileMenu = document.querySelector('.mobileMenu');
const btnSwitch = document.querySelector('#switch')
const btnDesktopSwitch = document.querySelector('#switch__desktop')
let docTitle = document.title;
let myDiv = document.getElementById("mouse");

window.addEventListener('blur', ()=>{
    document.title = 'Come back :(';
})

window.addEventListener('focus', () =>{
    document.title = docTitle;
})

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

function isTouchDevice() {
    try {
      //We try to create TouchEvent. It would fail for desktops and throw error
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  }
  
  const move = (e) => {
    //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
    try {
      //PageX and PageY return the position of client's cursor from top left of screen
      var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
      var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    } catch (e) {}
    //set left and top of div based on mouse position
    myDiv.style.left = x - 20 + "px";
    myDiv.style.top = y - 20 + "px";
  };
  //For mouse
  document.addEventListener("mousemove", (e) => {
    move(e);
  });
  //For touch
  document.addEventListener("touchmove", (e) => {
    move(e);
  });