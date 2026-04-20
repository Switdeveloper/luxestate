/**
 * LuxEstate - Classic Luxury Real Estate
 * Dramatic Animations & Interactive Features
 */

class LuxEstate {
    constructor() {
        this.init();
    }

    init() {
        this.initLoading();
        this.initNavigation();
        this.initThemeToggle();
        this.initHeroSlideshow();
        this.initScrollAnimations();
        this.initCounterAnimation();
        this.init3DCards();
        this.initSmoothScroll();
        this.initMobileNav();
    }

    // Loading Screen
    initLoading() {
        const loadingScreen = document.getElementById('loading-screen');
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                this.animateHero();
            }, 2000);
        });
    }

    // Navigation
    initNavigation() {
        const nav = document.getElementById('navbar');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
    }

    // Theme Toggle
    initThemeToggle() {
        const themeBtn = document.getElementById('theme-toggle');
        const body = document.body;
        const themeIcon = themeBtn.querySelector('.theme-icon');
        
        // Check saved theme
        const savedTheme = localStorage.getItem('luxestate-theme') || 'light';
        body.setAttribute('data-theme', savedTheme);
        themeIcon.textContent = savedTheme === 'dark' ? '☀' : '☾';
        
        themeBtn.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            body.setAttribute('data-theme', newTheme);
            themeIcon.textContent = newTheme === 'dark' ? '☀' : '☾';
            localStorage.setItem('luxestate-theme', newTheme);
            
            // Animate transition
            gsap.to(body, {
                opacity: 0.8,
                duration: 0.2,
                yoyo: true,
                repeat: 1
            });
        });
    }

    // Hero Slideshow
    initHeroSlideshow() {
        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;
        
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 6000);
    }

    // Hero Animations
    animateHero() {
        const tl = gsap.timeline();
        
        // Animate hero text
        tl.from('.hero-label', {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power3.out'
        })
        .from('.hero-title span', {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out'
        }, '-=0.6')
        .from('.hero-subtitle', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.hero-search', {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.4')
        .from('.hero-stats .stat-item', {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out'
        }, '-=0.6');
    }

    // Scroll Animations
    initScrollAnimations() {
        gsap.registerPlugin(ScrollTrigger);
        
        // Section headers
        gsap.utils.toArray('.section-header').forEach(header => {
            gsap.from(header.children, {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 40,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out'
            });
        });
        
        // Property cards
        gsap.utils.toArray('.property-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 60,
                rotation: 2,
                duration: 0.8,
                delay: i * 0.1,
                ease: 'power3.out'
            });
        });
        
        // Category cards
        gsap.utils.toArray('.category-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                scale: 0.9,
                duration: 0.8,
                delay: i * 0.1,
                ease: 'back.out(1.7)'
            });
        });
        
        // Agent cards
        gsap.utils.toArray('.agent-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: i * 0.15,
                ease: 'power3.out'
            });
        });
        
        // Feature items
        gsap.utils.toArray('.feature-item').forEach((item, i) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                x: -30,
                duration: 0.6,
                delay: i * 0.1,
                ease: 'power3.out'
            });
        });
        
        // Why us image
        gsap.from('.why-us-image', {
            scrollTrigger: {
                trigger: '.why-us',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: 50,
            duration: 1,
            ease: 'power3.out'
        });
        
        // Experience badge
        gsap.from('.experience-badge', {
            scrollTrigger: {
                trigger: '.experience-badge',
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0.5,
            rotation: -10,
            duration: 0.8,
            ease: 'back.out(1.7)'
        });
        
        // CTA section
        gsap.from('.cta-content > *', {
            scrollTrigger: {
                trigger: '.cta-section',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
        });
    }

    // Counter Animation
    initCounterAnimation() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.parentElement.dataset.count);
            
            ScrollTrigger.create({
                trigger: counter,
                start: 'top 90%',
                onEnter: () => {
                    gsap.to(counter, {
                        innerHTML: target,
                        duration: 2,
                        snap: { innerHTML: 1 },
                        ease: 'power2.out'
                    });
                },
                once: true
            });
        });
    }

    // 3D Card Tilt Effect
    init3DCards() {
        const cards = document.querySelectorAll('[data-tilt]');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                gsap.to(card, {
                    rotationX: rotateX,
                    rotationY: rotateY,
                    transformPerspective: 1000,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotationX: 0,
                    rotationY: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
        });
    }

    // Smooth Scroll
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: { y: target, offsetY: 80 },
                        ease: 'power3.inOut'
                    });
                }
            });
        });
    }

    // Mobile Navigation
    initMobileNav() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        const body = document.body;
        
        // Toggle mobile menu
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenuBtn.classList.toggle('active');
                navLinks.classList.toggle('active');
                body.classList.toggle('menu-open');
            });
        }
        
        // Close menu when clicking a link
        const navLinkItems = document.querySelectorAll('.nav-link');
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });
        
        // Bottom nav items
        const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
        mobileNavItems.forEach(item => {
            item.addEventListener('click', () => {
                mobileNavItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            });
        });
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    new LuxEstate();
});

// Register GSAP ScrollTo plugin
gsap.registerPlugin(ScrollToPlugin);
