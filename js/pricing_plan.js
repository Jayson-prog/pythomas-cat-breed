document.addEventListener("DOMContentLoaded", function() {
    const slideUpElements = document.querySelectorAll(".slide-up");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.1 });

    slideUpElements.forEach(el => observer.observe(el));
});