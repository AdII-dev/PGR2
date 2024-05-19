let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = '-60px'; // Hide the navbar (adjust based on navbar height)
    } else {
        // Scrolling up
        navbar.style.top = '0';
    }

    lastScrollTop = scrollTop;
});