document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // If it's a progress bar, trigger the fill animation
                if (entry.target.classList.contains('language-bar')) {
                    const bar = entry.target.querySelector('.bar');
                    if (bar) {
                        const width = bar.getAttribute('data-width');
                        bar.style.width = width;
                    }
                }
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply observer to all elements with 'reveal' class
    document.querySelectorAll('.reveal').forEach(el => {
        scrollObserver.observe(el);
    });

    // Handle progress bars specifically
    document.querySelectorAll('.language-bar').forEach(el => {
        const bar = el.querySelector('.bar');
        if (bar) {
            const width = bar.style.width;
            bar.setAttribute('data-width', width);
            bar.style.width = '0%';
            scrollObserver.observe(el);
        }
    });

    // Form Submission Simulation
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! This is a demo form.');
            form.reset();
        });
    }
});
