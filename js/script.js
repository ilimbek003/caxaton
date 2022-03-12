const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const btn = document.querySelector(".btn-toggle");
btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});