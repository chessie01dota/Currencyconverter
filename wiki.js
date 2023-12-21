document.addEventListener("DOMContentLoaded", function () {
    const scrollElements = document.querySelectorAll(".display, .display2");

    const fadeOnScroll = function () {
        scrollElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            if (elementTop < window.innerHeight && elementBottom >= 0) {
                element.classList.add("fade-in");
                element.classList.remove("fade-out");
            } else {
                element.classList.remove("fade-in");
                element.classList.add("fade-out");
            }
        });
    };

    document.addEventListener("scroll", fadeOnScroll);

    // Initial check in case elements are already in view
    fadeOnScroll();
});
