window.addEventListener("scroll", function () {
    const nav = document.querySelector(".nav");
    if (window.scrollY > 300) {
        nav.classList.add("scrolled");
    } else if (window.scrollY > 150) {
        nav.classList.add("scrolling");
    } else {
        nav.classList.remove("scrolled");
        nav.classList.remove("scrolling");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".materials .list a");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = `${index * 0.2}s`;
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }
        });
    });

    elements.forEach((el) => observer.observe(el));
});
