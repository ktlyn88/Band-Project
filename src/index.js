// Hamburger Show
const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    navUl.classList.toggle('show');
})
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('show');
    navUl.classList.remove('show');
}))



// functie pentru video Slider:
function videoSlider(links){
    document.querySelector(".slider").src = links; 
}
