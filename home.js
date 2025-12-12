// home.js - Professional Portfolio JavaScript

// ===== CONFIGURATION =====
const CONFIG = {
    typingTexts: [
        'Full-Stack Developer',
        'Cybersecurity Specialist',
        'IoT Developer',
        'IT Consultant',
        'Software Engineer'
    ],
    typingSpeed: 100,
    typingDelay: 2000,
    skillAnimationDelay: 300,
    formSubmitUrl: 'https://formspree.io/f/your-form-id'
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio Initializing...');
    
    initPreloader();
    initTheme();
    initNavigation();
    initTypedText();
    initAnimations();
    initFormHandlers();
    initScrollEffects();
    initPrintFunctionality();
    initSkillAnimations();
    initStatsCounter();
    initSmoothScrolling();
    initIntersectionObserver();
    
    console.log('✅ Portfolio Ready!');
});

// ===== PRELOADER =====
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }, 500);
            }, 800);
        });
    }
}

// ===== THEME MANAGEMENT =====
function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.getElementById('themeIcon');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    const themeIcon = document.getElementById('themeIcon');
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('portfolio-theme', 'dark');
        if (themeIcon) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    } else {
        localStorage.setItem('portfolio-theme', 'light');
        if (themeIcon) {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    }
}

// ===== NAVIGATION =====
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle && navMenu) {
        // Mobile menu toggle
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// ===== TYPED TEXT ANIMATION =====
function initTypedText() {
    const typedTextElement = document.querySelector('.typed-text');
    const cursorElement = document.querySelector('.cursor');
    
    if (!typedTextElement || !cursorElement) return;
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isTypingPaused = false;
    
    function type() {
        const currentText = CONFIG.typingTexts[textIndex];
        
        if (isDeleting) {
            // Deleting text
            typedTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            cursorElement.classList.add('typing');
        } else {
            // Typing text
            typedTextElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            cursorElement.classList.add('typing');
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            // Finished typing, pause before deleting
            isTypingPaused = true;
            cursorElement.classList.remove('typing');
            setTimeout(() => {
                isTypingPaused = false;
                isDeleting = true;
                type();
            }, CONFIG.typingDelay);
            return;
        }
        
        if (isDeleting && charIndex === 0) {
            // Finished deleting, move to next text
            isDeleting = false;
            textIndex = (textIndex + 1) % CONFIG.typingTexts.length;
            cursorElement.classList.remove('typing');
        }
        
        // Calculate typing speed
        let speed = CONFIG.typingSpeed;
        if (isDeleting) speed /= 2;
        if (isTypingPaused) speed = CONFIG.typingDelay;
        
        setTimeout(type, speed);
    }
    
    // Start typing animation
    setTimeout(type, 1000);
}

// ===== ANIMATIONS =====
function initAnimations() {
    // Add animation classes on scroll
    const animateElements = document.querySelectorAll('.fade-in-up, .skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                if (entry.target.classList.contains('skill-progress')) {
                    const width = entry.target.getAttribute('data-width');
                    setTimeout(() => {
                        entry.target.style.width = `${width}%`;
                    }, CONFIG.skillAnimationDelay);
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(el => observer.observe(el));
}

// ===== FORM HANDLING =====
function initFormHandlers() {
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
        
        // Add real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const fieldName = field.id.replace('contact', '').toLowerCase();
    
    let isValid = true;
    let errorMessage = '';
    
    switch(fieldName) {
        case 'name':
            if (value.length < 2) {
                isValid = false;
                errorMessage = 'Name must be at least 2 characters';
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
            break;
        case 'subject':
            if (value.length < 3) {
                isValid = false;
                errorMessage = 'Subject is required';
            }
            break;
        case 'message':
            if (value.length < 10) {
                isValid = false;
                errorMessage = 'Message must be at least 10 characters';
            }
            break;
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    } else {
        clearFieldError({ target: field });
    }
    
    return isValid;
}

function showFieldError(field, message) {
    clearFieldError({ target: field });
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#ef4444';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    
    field.style.borderColor = '#ef4444';
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(e) {
    const field = e.target;
    const errorDiv = field.parentNode.querySelector('.field-error');
    
    if (errorDiv) {
        errorDiv.remove();
    }
    
    field.style.borderColor = '#e5e7eb';
}

async function handleContactSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    // Validate all fields
    let isValid = true;
    const fields = form.querySelectorAll('input, textarea');
    fields.forEach(field => {
        const event = new Event('blur');
        field.dispatchEvent(event);
        if (field.parentNode.querySelector('.field-error')) {
            isValid = false;
        }
    });
    
    if (!isValid) {
        showNotification('Please fix the errors in the form', 'error');
        return;
    }
    
    // Prepare data for submission
    const data = {
        name: formData.get('contactName'),
        email: formData.get('contactEmail'),
        subject: formData.get('contactSubject'),
        message: formData.get('contactMessage'),
        timestamp: new Date().toISOString()
    };
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    try {
        // Simulate API call (replace with actual API endpoint)
        await simulateAPICall(data);
        
        // Success
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        form.reset();
        
        // Log to console (for demo)
        console.log('📧 Contact Form Submission:', data);
        
    } catch (error) {
        // Error
        showNotification('Failed to send message. Please try again.', 'error');
        console.error('Form submission error:', error);
    } finally {
        // Reset button
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }
}

async function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const email = form.querySelector('input[type="email"]').value;
    const button = form.querySelector('button');
    const originalText = button.innerHTML;
    
    if (!email || !validateEmail(email)) {
        showNotification('Please enter a valid email address', 'warning');
        return;
    }
    
    // Show loading
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    button.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        showNotification('Successfully subscribed to newsletter!', 'success');
        form.reset();
        button.innerHTML = originalText;
        button.disabled = false;
        
        // Log subscription
        console.log('📬 Newsletter Subscription:', email);
    }, 1500);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function simulateAPICall(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ status: 'success', data });
        }, 2000);
    });
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) existingNotification.remove();
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        min-width: 300px;
        max-width: 400px;
        animation: slideIn 0.3s ease;
    `;
    
    // Add CSS for animation
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                padding: 0;
                font-size: 1rem;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add close functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
    
    document.body.appendChild(notification);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function getNotificationColor(type) {
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    return colors[type] || '#3b82f6';
}

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Active navigation on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== PRINT FUNCTIONALITY =====
function initPrintFunctionality() {
    const printBtn = document.getElementById('printBtn');
    
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }
}

// ===== SKILL ANIMATIONS =====
function initSkillAnimations() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        
        // Create observer for skill bars
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        bar.style.width = `${width}%`;
                    }, CONFIG.skillAnimationDelay);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        });
        
        observer.observe(bar);
    });
}

// ===== STATS COUNTER =====
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat h3');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const targetValue = parseInt(stat.textContent);
                let currentValue = 0;
                const increment = targetValue / 50;
                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= targetValue) {
                        stat.textContent = targetValue + (stat.textContent.includes('+') ? '+' : '');
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(currentValue) + (stat.textContent.includes('+') ? '+' : '');
                    }
                }, 30);
                observer.unobserve(stat);
            }
        });
    }, {
        threshold: 0.5
    });
    
    stats.forEach(stat => observer.observe(stat));
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== INTERSECTION OBSERVER FOR LAZY LOADING =====
function initIntersectionObserver() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== EXPORT FOR MODULE USAGE =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleTheme,
        validateEmail,
        showNotification
    };
}

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('Portfolio Error:', e.error);
});

// ===== OFFLINE DETECTION =====
window.addEventListener('offline', () => {
    showNotification('You are currently offline. Some features may be limited.', 'warning');
});

window.addEventListener('online', () => {
    showNotification('You are back online!', 'success');
});

// ===== SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(error => {
            console.log('Service Worker registration failed:', error);
        });
    });
}

// ===== ANALYTICS (Example - replace with your own) =====
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
    console.log(`📊 Analytics: ${category} - ${action} - ${label}`);
}

// Track page views
trackEvent('Page', 'View', window.location.pathname);

// ===== ADDITIONAL ENHANCEMENTS =====
// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + P for print
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        window.print();
    }
    
    // Escape to close mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        if (navMenu && navMenu.classList.contains('active')) {
            document.getElementById('navToggle').classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// Add touch device detection
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
if (isTouchDevice) {
    document.body.classList.add('touch-device');
}

// Add reduced motion support
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    document.body.classList.add('reduced-motion');
}