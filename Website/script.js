// PolitixPlume Website JavaScript
// Slideshow functionality for article sections

// Initialize slideshow functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSlideshows();
});

// Main slideshow function
function moveSlide(direction, slideshowId) {
    const slideshow = document.getElementById(slideshowId);
    if (!slideshow) return;
    
    const slides = slideshow.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    if (totalSlides <= 1) return; // No need to slide if only one slide
    
    let currentSlide = 0;
    
    // Find current slide position
    const currentTransform = slideshow.style.transform;
    if (currentTransform) {
        const match = currentTransform.match(/translateX\((-?\d+)%\)/);
        if (match) {
            currentSlide = Math.abs(parseInt(match[1])) / 100;
        }
    }
    
    // Calculate new slide position
    let newSlide = currentSlide + direction;
    
    // Handle wrap-around
    if (newSlide >= totalSlides) {
        newSlide = 0;
    } else if (newSlide < 0) {
        newSlide = totalSlides - 1;
    }
    
    // Apply transform
    slideshow.style.transform = `translateX(-${newSlide * 100}%)`;
    
    // Update arrow visibility based on slide position
    updateArrowVisibility(slideshowId, newSlide, totalSlides);
}

// Initialize all slideshows on the page
function initializeSlideshows() {
    const slideshows = [
        'bangladesh-slides',
        'academia-slides', 
        'book-slides'
    ];
    
    slideshows.forEach(slideshowId => {
        const slideshow = document.getElementById(slideshowId);
        if (slideshow) {
            const slides = slideshow.querySelectorAll('.slide');
            const totalSlides = slides.length;
            
            // Initialize arrow visibility
            updateArrowVisibility(slideshowId, 0, totalSlides);
            
            // Add keyboard navigation
            addKeyboardNavigation(slideshowId);
            
            // Add touch/swipe support for mobile
            addTouchSupport(slideshow);
        }
    });
}

// Update arrow visibility based on current slide
function updateArrowVisibility(slideshowId, currentSlide, totalSlides) {
    const slideshowContainer = document.getElementById(slideshowId).closest('.slideshow');
    if (!slideshowContainer) return;
    
    const prevArrow = slideshowContainer.querySelector('.arrow.prev');
    const nextArrow = slideshowContainer.querySelector('.arrow.next');
    
    if (totalSlides <= 1) {
        // Hide arrows if only one slide
        if (prevArrow) prevArrow.style.display = 'none';
        if (nextArrow) nextArrow.style.display = 'none';
    } else {
        // Show arrows
        if (prevArrow) prevArrow.style.display = 'flex';
        if (nextArrow) nextArrow.style.display = 'flex';
    }
}

// Add keyboard navigation support
function addKeyboardNavigation(slideshowId) {
    const slideshow = document.getElementById(slideshowId);
    if (!slideshow) return;
    
    slideshow.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            moveSlide(-1, slideshowId);
            e.preventDefault();
        } else if (e.key === 'ArrowRight') {
            moveSlide(1, slideshowId);
            e.preventDefault();
        }
    });
    
    // Make slideshow focusable for keyboard navigation
    slideshow.setAttribute('tabindex', '0');
}

// Add touch/swipe support for mobile devices
function addTouchSupport(slideshow) {
    let startX = 0;
    let endX = 0;
    let isDragging = false;
    
    slideshow.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        isDragging = true;
    }, { passive: true });
    
    slideshow.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        endX = e.touches[0].clientX;
    }, { passive: true });
    
    slideshow.addEventListener('touchend', function(e) {
        if (!isDragging) return;
        isDragging = false;
        
        const diffX = startX - endX;
        const threshold = 50; // Minimum swipe distance
        
        if (Math.abs(diffX) > threshold) {
            const slideshowId = slideshow.id;
            if (diffX > 0) {
                // Swipe left - go to next slide
                moveSlide(1, slideshowId);
            } else {
                // Swipe right - go to previous slide
                moveSlide(-1, slideshowId);
            }
        }
    }, { passive: true });
}

// Utility function to auto-advance slides (optional)
function startAutoSlide(slideshowId, interval = 5000) {
    setInterval(() => {
        moveSlide(1, slideshowId);
    }, interval);
}

// Smooth scrolling for navigation links
function smoothScrollTo(element) {
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Mobile menu toggle (if needed for responsive design)
function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.classList.toggle('mobile-active');
    }
}

// Initialize any other interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            smoothScrollTo(target);
        });
    });
    
    // Add loading animation for images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity for loading effect
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});