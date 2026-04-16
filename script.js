// SAHIB'Z COLLECTION — script.js

// Navbar shadow on scroll
window.addEventListener('scroll', function () {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu if open
      const menu = document.getElementById('navMenu');
      if (menu && menu.classList.contains('show')) {
        document.querySelector('.navbar-toggler').click();
      }
    }
  });
});

// Fade-in animation for suit cards on scroll
const cards = document.querySelectorAll('.suit-card, .how-card, .ship-card, .astat');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

cards.forEach((card, i) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(18px)';
  card.style.transition = `opacity 0.45s ease ${i * 0.05}s, transform 0.45s ease ${i * 0.05}s, box-shadow 0.25s, border-color 0.25s`;
  observer.observe(card);
});
