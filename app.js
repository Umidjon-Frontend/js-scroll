const btnMenu = document.querySelector(".btn-menu"),
    nav = document.querySelector(".nav"),
    navbar = document.querySelector('.navbar');
window.addEventListener('scroll', ()=>{
    navbar.classList.toggle('fixed-nav', window.scrollY > 50)
})
btnMenu.addEventListener("click", () => {
    nav.classList.toggle("menu-active");
});
