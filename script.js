// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNav = document.querySelector('.mobile-nav');

mobileMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    mobileMenu.classList.toggle('active');
});

// Close mobile nav on link click
mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        mobileMenu.classList.remove('active');
    });
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .pipeline-step, .discord-msg, .section-header').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Add fade-in CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
    .feature-card.fade-in { transition-delay: calc(var(--i, 0) * 0.1s); }
`;
document.head.appendChild(style);

// Stagger feature cards
document.querySelectorAll('.feature-card').forEach((card, i) => {
    card.style.setProperty('--i', i);
});

// Nav background on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.8)';
    }
});
