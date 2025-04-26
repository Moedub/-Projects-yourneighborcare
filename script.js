// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu   = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // close mobile nav on link click
    if(navMenu.classList.contains('show')) {
      navMenu.classList.remove('show');
    }
  });
});
