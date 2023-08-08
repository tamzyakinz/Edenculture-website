const navSlide = () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    
    burgerMenu.addEventListener('click', ()=>{

        //Toggle Nav
        nav.classList.toggle('nav-active');


        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s` ;
            }
        });

        //Burger Menu Animation
        burgerMenu.classList.toggle('toggle');
    });

    
}



// CODE FOR SLIDER NAVIGATION
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".image-slide");

var sliderNav = function(manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    })

    slides.forEach((slide) => {
        slide.classList.remove("active");
    })

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    })
})




navSlide();