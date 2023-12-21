window.addEventListener('scroll', function () {
    var photo = document.querySelector('.photo');
    var distanceY = window.scrollY;

    // Adjust the value based on when you want the color change to happen
    if (distanceY > 100) {
        photo.classList.add('scrolled');
    } else {
        photo.classList.remove('scrolled');
    }
});