
// Initialize Lucide Icons
lucide.createIcons();

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
const navText = document.getElementById('nav-text');
const navLinks = document.querySelectorAll('.nav-link');
const navCta = document.getElementById('nav-cta');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');

function updateNavbar() {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-white/95', 'backdrop-blur-sm', 'shadow-sm', 'py-3');
    navbar.classList.remove('bg-transparent', 'py-5', 'text-white');
    navbar.classList.add('text-smartix-navy');
    
    // Nav Text Color
    if(navText) {
        navText.classList.remove('text-white');
        navText.classList.add('text-smartix-navy');
    }

    navLinks.forEach(link => {
      link.classList.remove('text-white/90');
      link.classList.add('text-smartix-navy');
    });
    
    if(navCta) {
        navCta.classList.remove('bg-white', 'text-smartix-blue');
        navCta.classList.add('bg-smartix-blue', 'text-white');
    }

  } else {
    navbar.classList.remove('bg-white/95', 'backdrop-blur-sm', 'shadow-sm', 'py-3');
    navbar.classList.add('bg-transparent', 'py-5', 'text-white');
    navbar.classList.remove('text-smartix-navy');

    if(navText) {
        navText.classList.add('text-white');
        navText.classList.remove('text-smartix-navy');
    }

    navLinks.forEach(link => {
      link.classList.add('text-white/90');
      link.classList.remove('text-smartix-navy');
    });

    if(navCta) {
        navCta.classList.add('bg-white', 'text-smartix-blue');
        navCta.classList.remove('bg-smartix-blue', 'text-white');
    }
  }
}

window.addEventListener('scroll', updateNavbar);
// Initial check
updateNavbar();


// Mobile Menu Logic
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
    });
}

// Close menu on link click
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
  });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, {
    root: null,
    threshold: 0.1, // Trigger when 10% visible
    rootMargin: "0px"
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});
