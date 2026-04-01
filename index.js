const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

// Show the first slide initially
slides[currentIndex].classList.add("active");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Change slide every 3 seconds
setInterval(nextSlide, 3000);




$('.owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 15,
    nav: true,
    dots: true,   // 👈 yeh ON karo
    slideBy: 3,
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
    }
});


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 3
});





