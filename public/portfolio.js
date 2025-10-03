// ========================================
// SCROLL PROGRESS INDICATOR
// ========================================
function updateScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
}

// ========================================
// NAVIGATION - ACTIVE SECTION TRACKING
// ========================================
function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navButtons = document.querySelectorAll('.nav-btn');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-section') === currentSection) {
            btn.classList.add('active');
        }
    });
}

// ========================================
// SMOOTH SCROLL TO SECTION
// ========================================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// ========================================
// SCROLL ANIMATIONS - FADE IN
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-delay-2, .fade-in-delay-3');
    animatedElements.forEach(el => observer.observe(el));
}

// ========================================
// RESUME DOWNLOAD
// ========================================
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'DADI_Madhu_Resume.pdf';
    link.download = 'DADI_Madhu_Resume.pdf';
    link.click();
}

// ========================================
// EVENT LISTENERS
// ========================================
window.addEventListener('scroll', () => {
    updateScrollProgress();
    updateActiveSection();
});

// Navigation button clicks
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const sectionId = btn.getAttribute('data-section');
        scrollToSection(sectionId);
    });
});

// Download resume button
document.getElementById('downloadResume').addEventListener('click', downloadResume);

// ========================================
// INITIALIZE ON PAGE LOAD
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Set initial scroll progress
    updateScrollProgress();
    
    // Set initial active section
    updateActiveSection();
    
    // Trigger initial animations
    setTimeout(() => {
        const initialElements = document.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-delay-2, .fade-in-delay-3');
        initialElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    }, 100);
});