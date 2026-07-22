// assets/js/main.js
document.addEventListener("DOMContentLoaded", () => {
    // Enable Bootstrap tooltips or custom interactive features if needed
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navbarCollapse).toggle();
            }
        });
    });
});