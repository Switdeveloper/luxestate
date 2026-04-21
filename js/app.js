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
const target = parseInt(counter.dataset.count);
if (isNaN(target)) return;

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

// Initialize Property Modal
this.initPropertyModal();
}

// Property Modal
initPropertyModal() {
const modal = document.getElementById('propertyModal');
const detailButtons = document.querySelectorAll('.btn-details');
const closeBtn = document.querySelector('.modal-close');
const overlay = document.querySelector('.modal-overlay');

// Property data
const properties = {
1: {
title: 'Modern Hillside Villa',
price: '4,500,000',
period: '',
address: 'Beverly Hills, California',
image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
tag: 'For Sale',
type: 'Villa',
beds: 5,
baths: '4.5',
sqft: '4,200',
description: 'This stunning modern hillside villa offers breathtaking panoramic views of the city and ocean. Featuring an open-concept design with floor-to-ceiling windows, the home seamlessly blends indoor and outdoor living. The property includes a gourmet kitchen with top-of-the-line appliances, a private infinity pool, and a spacious master suite with a spa-like bathroom.',
features: ['Infinity Pool', 'Wine Cellar', 'Home Theater', 'Smart Home System', 'Chef\'s Kitchen', 'Guest House', '4-Car Garage', 'Private Gate'],
agent: { name: 'Michael Ross', title: 'Senior Agent', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100' }
},
2: {
title: 'Skyline Penthouse',
price: '15,000',
period: '/mo',
address: 'Manhattan, New York',
image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
tag: 'For Rent',
type: 'Penthouse',
beds: 3,
baths: '3',
sqft: '2,800',
description: 'Experience luxury living at its finest in this spectacular Manhattan penthouse. Perched high above the city, this residence offers 360-degree views through walls of glass. The interior features imported Italian marble, custom millwork, and designer lighting throughout. Building amenities include a concierge, fitness center, and rooftop terrace.',
features: ['360° Views', 'Private Terrace', 'Concierge Service', 'Fitness Center', 'Valet Parking', 'Climate Controlled', 'Italian Marble', 'Custom Lighting'],
agent: { name: 'Sarah Chen', title: 'Luxury Specialist', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100' }
},
3: {
title: 'Waterfront Estate',
price: '8,750,000',
period: '',
address: 'Miami Beach, Florida',
image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
tag: 'For Sale',
type: 'Estate',
beds: 6,
baths: '5.5',
sqft: '6,500',
description: 'A magnificent waterfront estate in the heart of Miami Beach. This architectural masterpiece features direct ocean access with a private dock, expansive outdoor entertaining areas, and a resort-style pool. The interior boasts soaring ceilings, a grand staircase, and meticulously designed living spaces perfect for both intimate gatherings and grand events.',
features: ['Private Dock', 'Resort Pool', 'Beach Access', 'Outdoor Kitchen', 'Elevator', 'Master Wing', 'Wine Room', 'Gated Entry'],
agent: { name: 'James Wilson', title: 'Estate Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' }
},
4: {
title: 'Modern Estate',
price: '6,200,000',
period: '',
address: 'Los Angeles, California',
image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
tag: 'For Sale',
type: 'Estate',
beds: 4,
baths: '3.5',
sqft: '3,800',
description: 'A contemporary masterpiece nestled in the Hollywood Hills. This architectural gem features clean lines, walls of glass, and seamless indoor-outdoor flow. The property includes a zero-edge pool, outdoor cinema, and a guesthouse. The interior showcases designer finishes, a chef\'s kitchen, and a primary suite with stunning city views.',
features: ['Zero-Edge Pool', 'Outdoor Cinema', 'Guest House', 'City Views', 'Solar Panels', 'Media Room', 'Chef\'s Kitchen', 'Smart Home'],
agent: { name: 'Michael Ross', title: 'Senior Agent', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100' }
},
5: {
title: 'Oceanfront Villa',
price: '12,900,000',
period: '',
address: 'Malibu, California',
image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
tag: 'For Sale',
type: 'Villa',
beds: 7,
baths: '6',
sqft: '8,200',
description: 'An exquisite oceanfront villa offering the ultimate in coastal luxury. This estate features direct beach access, multiple terraces for entertaining, and floor-to-ceiling windows that frame the Pacific Ocean. The home includes a private spa, gourmet kitchen, and a detached guest villa with its own entrance.',
features: ['Beach Access', 'Private Spa', 'Guest Villa', 'Ocean Views', 'Multiple Terraces', 'Gourmet Kitchen', 'Wine Cellar', 'Security System'],
agent: { name: 'James Wilson', title: 'Estate Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' }
},
6: {
title: 'Luxury Apartment',
price: '8,500',
period: '/mo',
address: 'Chicago, Illinois',
image: 'https://images.unsplash.com/photo-1600607687644-a7171b42498c?w=800',
tag: 'For Rent',
type: 'Apartment',
beds: 2,
baths: '2',
sqft: '1,500',
description: 'A sophisticated luxury apartment in Chicago\'s premier downtown location. This residence features high-end finishes, panoramic city views, and access to world-class building amenities. The open floor plan is perfect for entertaining, with a modern kitchen, spacious living area, and a luxurious primary suite.',
features: ['City Views', 'Doorman', 'Fitness Center', 'Rooftop Deck', 'Parking Included', 'In-Unit Laundry', 'Hardwood Floors', 'Stainless Appliances'],
agent: { name: 'Sarah Chen', title: 'Luxury Specialist', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100' }
},
7: {
title: 'Mediterranean Villa',
price: '7,200,000',
period: '',
address: 'Santa Barbara, California',
image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
tag: 'For Sale',
type: 'Villa',
beds: 5,
baths: '4',
sqft: '5,800',
description: 'A stunning Mediterranean villa nestled in the hills of Santa Barbara. This architectural gem features hand-painted tiles, arched doorways, and a central courtyard with a fountain. The property includes an infinity pool, outdoor kitchen, and panoramic ocean views.',
features: ['Ocean Views', 'Infinity Pool', 'Outdoor Kitchen', 'Wine Cellar', 'Courtyard', 'Guest House', 'Arched Doorways', 'Mediterranean Architecture'],
agent: { name: 'Michael Ross', title: 'Senior Agent', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100' }
},
8: {
title: 'Downtown Loft',
price: '5,500',
period: '/mo',
address: 'San Francisco, California',
image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
tag: 'For Rent',
type: 'Loft',
beds: 1,
baths: '1.5',
sqft: '1,200',
description: 'A stylish industrial loft in the heart of San Francisco. Featuring exposed brick walls, soaring ceilings, and oversized windows with city views. This converted warehouse space offers modern living with authentic industrial character.',
features: ['Exposed Brick', 'High Ceilings', 'City Views', 'Industrial Design', 'Open Floor Plan', 'Rooftop Access', 'Bike Storage', 'Pet Friendly'],
agent: { name: 'Sarah Chen', title: 'Luxury Specialist', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100' }
},
9: {
title: 'Hilltop Retreat',
price: '9,800,000',
period: '',
address: 'Aspen, Colorado',
image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
tag: 'For Sale',
type: 'Mountain Estate',
beds: 6,
baths: '5.5',
sqft: '7,200',
description: 'An extraordinary mountain retreat offering unparalleled privacy and stunning alpine views. This architectural masterpiece features floor-to-ceiling windows, a grand stone fireplace, and direct ski-in/ski-out access. The property includes a heated outdoor pool, hot tub, and private hiking trails.',
features: ['Ski-In/Ski-Out', 'Mountain Views', 'Heated Pool', 'Hot Tub', 'Stone Fireplace', 'Private Trails', 'Wine Cellar', 'Home Theater'],
agent: { name: 'James Wilson', title: 'Estate Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' }
}
};

// Open modal
if (detailButtons) {
detailButtons.forEach(btn => {
btn.addEventListener('click', (e) => {
e.preventDefault();
const propertyId = btn.dataset.property;
const property = properties[propertyId];

if (property && modal) {
// Populate modal
modal.querySelector('#modalImage').src = property.image;
modal.querySelector('#modalTitle').textContent = property.title;
modal.querySelector('#modalPrice').textContent = property.price;
modal.querySelector('#modalPeriod').textContent = property.period;
modal.querySelector('#modalAddress span').textContent = property.address;
modal.querySelector('#modalTag').textContent = property.tag;
modal.querySelector('#modalBeds').textContent = property.beds;
modal.querySelector('#modalBaths').textContent = property.baths;
modal.querySelector('#modalSqft').textContent = property.sqft;
modal.querySelector('#modalType').textContent = property.type;
modal.querySelector('#modalDescription').textContent = property.description;
modal.querySelector('#modalAgentName').textContent = property.agent.name;
modal.querySelector('#modalAgentTitle').textContent = property.agent.title;
modal.querySelector('#modalAgentImage').src = property.agent.image;

// Populate features
const featuresList = modal.querySelector('#modalFeatures');
featuresList.innerHTML = property.features.map(f => `<li>${f}</li>`).join('');

// Show modal
modal.classList.add('active');
document.body.style.overflow = 'hidden';

// Animate modal content
gsap.fromTo('.modal-container',
{ opacity: 0, y: 40, scale: 0.95 },
{ opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out' }
);
}
});
});
}

// Close modal
const closeModal = () => {
if (modal) {
gsap.to('.modal-container', {
opacity: 0,
y: 40,
scale: 0.95,
duration: 0.3,
ease: 'power3.in',
onComplete: () => {
modal.classList.remove('active');
document.body.style.overflow = '';
}
});
}
};

if (closeBtn) {
closeBtn.addEventListener('click', closeModal);
}

if (overlay) {
overlay.addEventListener('click', closeModal);
}

// Close on escape key
document.addEventListener('keydown', (e) => {
if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
closeModal();
}
});
}
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    new LuxEstate();
});

// Register GSAP ScrollTo plugin
gsap.registerPlugin(ScrollToPlugin);
