
 const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

// Show the first slide initially
slides[currentIndex].classList.add("active ");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active "));
    slides[index].classList.add("active ");
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Change slide every 3 seconds
setInterval(nextSlide, 3000);
