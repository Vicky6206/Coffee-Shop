const navLinks=document.querySelectorAll(".nav-menu .nav-link");
const menuopenButton=document.querySelector("#menu-open-button");
const menucloseButton=document.querySelector("#menu-close-button");

menuopenButton.addEventListener("click",()=>{
    // toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
})
// close menu when the close button is click
menucloseButton.addEventListener("click",()=>menuopenButton.click());
// close nav link when the close button is click
navLinks.forEach(link=>{
    link.addEventListener("click",()=> menuopenButton.click());
})
// Initialize swiper
const swiper=new Swiper('.slider-wrapper',{
    
    loop:true,
    grabCursor: true, 
    speaceBetween: 25,
    // if we need pagination
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    // navigation arrow
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // //And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    breakpoints: {
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        },
    }
});