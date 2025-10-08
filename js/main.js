/**
 * Filtrade - Industrial Filtration Website
 * Main JavaScript File
 */

// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme(this.theme);
        this.setupToggle();
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.theme = theme;
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
        
        // Track theme change with Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'theme_change', {
                'event_category': 'engagement',
                'event_label': newTheme
            });
        }
    }

    setupToggle() {
        const toggleButton = document.getElementById('themeToggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => this.toggleTheme());
        }
    }
}

// Mobile Menu Management
class MobileMenu {
    constructor() {
        this.menuToggle = document.getElementById('mobileMenuToggle');
        this.navMenu = document.getElementById('navMenu');
        this.init();
    }

    init() {
        if (this.menuToggle && this.navMenu) {
            this.menuToggle.addEventListener('click', () => this.toggle());
            
            // Close menu when clicking on a link
            const navLinks = this.navMenu.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => this.close());
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!this.menuToggle.contains(e.target) && !this.navMenu.contains(e.target)) {
                    this.close();
                }
            });
        }
    }

    toggle() {
        this.navMenu.classList.toggle('active');
        this.menuToggle.classList.toggle('active');
    }

    close() {
        this.navMenu.classList.remove('active');
        this.menuToggle.classList.remove('active');
    }
}

// Contact Form Handler
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.successMessage = document.getElementById('formSuccess');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    async handleSubmit(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());

        // Track form submission with Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submission', {
                'event_category': 'engagement',
                'event_label': 'contact_form'
            });
        }

        // Simulate form submission (replace with actual API call)
        try {
            // In a real implementation, you would send data to a server
            // const response = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // });

            // Simulate success
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            this.showSuccess();
            this.form.reset();
        } catch (error) {
            console.error('Form submission error:', error);
            alert('There was an error submitting the form. Please try again.');
        }
    }

    showSuccess() {
        this.form.style.display = 'none';
        this.successMessage.style.display = 'block';

        // Reset after 5 seconds
        setTimeout(() => {
            this.form.style.display = 'block';
            this.successMessage.style.display = 'none';
        }, 5000);
    }
}

// Smooth Scroll Handler
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href !== '#' && href !== '#!') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }
}

// Scroll Animation Handler
class ScrollAnimation {
    constructor() {
        this.elements = document.querySelectorAll('.fade-in-up');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            this.elements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                observer.observe(element);
            });
        }
    }
}

// Navbar Scroll Effect
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }

    init() {
        if (this.navbar) {
            let lastScroll = 0;
            
            window.addEventListener('scroll', () => {
                const currentScroll = window.pageYOffset;
                
                if (currentScroll > 100) {
                    this.navbar.style.boxShadow = 'var(--shadow-md)';
                } else {
                    this.navbar.style.boxShadow = 'var(--shadow-sm)';
                }
                
                lastScroll = currentScroll;
            });
        }
    }
}

// Download Tracking
class DownloadTracker {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[download]').forEach(link => {
            link.addEventListener('click', (e) => {
                const fileName = link.getAttribute('href').split('/').pop();
                
                // Track download with Google Analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'file_download', {
                        'event_category': 'engagement',
                        'event_label': fileName,
                        'value': fileName
                    });
                }
            });
        });
    }
}

// Link Click Tracking
class LinkTracker {
    constructor() {
        this.init();
    }

    init() {
        // Track external links
        document.querySelectorAll('a[href^="http"]').forEach(link => {
            if (!link.href.includes(window.location.hostname)) {
                link.addEventListener('click', (e) => {
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'outbound_click', {
                            'event_category': 'engagement',
                            'event_label': link.href
                        });
                    }
                });
            }
        });

        // Track product page views
        const productLinks = document.querySelectorAll('a[href*="products/"]');
        productLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const productName = link.href.split('/').pop().replace('.html', '');
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'view_product', {
                        'event_category': 'engagement',
                        'event_label': productName
                    });
                }
            });
        });
    }
}

// Form Field Validation
class FormValidator {
    constructor() {
        this.init();
    }

    init() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('blur', () => this.validateField(input));
                input.addEventListener('input', () => {
                    if (input.classList.contains('invalid')) {
                        this.validateField(input);
                    }
                });
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const type = field.type;
        let isValid = true;

        if (field.hasAttribute('required') && !value) {
            isValid = false;
        }

        if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(value);
        }

        if (type === 'tel' && value) {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            isValid = phoneRegex.test(value);
        }

        if (isValid) {
            field.classList.remove('invalid');
            field.classList.add('valid');
        } else {
            field.classList.remove('valid');
            field.classList.add('invalid');
        }

        return isValid;
    }
}

// Page Load Performance Tracking
class PerformanceTracker {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('load', () => {
            // Track page load time
            if (typeof gtag !== 'undefined' && window.performance) {
                const loadTime = window.performance.timing.loadEventEnd - 
                               window.performance.timing.navigationStart;
                
                gtag('event', 'timing_complete', {
                    'name': 'page_load',
                    'value': loadTime,
                    'event_category': 'performance'
                });
            }
        });
    }
}

// Back to Top Button
class BackToTop {
    constructor() {
        this.createButton();
        this.init();
    }

    createButton() {
        const button = document.createElement('button');
        button.id = 'backToTop';
        button.innerHTML = '↑';
        button.setAttribute('aria-label', 'Back to top');
        button.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--primary-color);
            color: white;
            border: none;
            font-size: 24px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            box-shadow: var(--shadow-md);
        `;
        document.body.appendChild(button);
        this.button = button;
    }

    init() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                this.button.style.opacity = '1';
                this.button.style.visibility = 'visible';
            } else {
                this.button.style.opacity = '0';
                this.button.style.visibility = 'hidden';
            }
        });

        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    new ThemeManager();
    new MobileMenu();
    new ContactForm();
    new SmoothScroll();
    new NavbarScroll();
    
    // Animation and effects
    new ScrollAnimation();
    new BackToTop();
    
    // Analytics and tracking
    new DownloadTracker();
    new LinkTracker();
    new PerformanceTracker();
    
    // Form validation
    new FormValidator();
});

// Export for use in other scripts if needed
export {
    ThemeManager,
    MobileMenu,
    ContactForm,
    SmoothScroll,
    ScrollAnimation,
    NavbarScroll,
    DownloadTracker,
    LinkTracker,
    PerformanceTracker,
    FormValidator,
    BackToTop
};


