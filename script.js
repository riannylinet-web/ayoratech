// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (document.querySelector(targetId)) {
            document.querySelector(targetId).scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
    });
});

// Add active class to current page link
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// Add fade-in animation to elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.feature-card, .testimonial-card').forEach(card => {
    observer.observe(card);
});

// Image preloading and error handling
function preloadImages() {
    const imageUrls = ['home 3.jpg', 'laptop 1.jpg', 'laptop.jpg', 'printer.jpg', 'keyboard.jpg'];
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
        img.onload = function() {
            console.log('Image loaded successfully:', url);
            const imageElements = document.querySelectorAll(`img[src="${url}"]`);
            imageElements.forEach(imgEl => {
                imgEl.style.opacity = '1';
                imgEl.style.transition = 'opacity 0.5s ease';
            });
        };
        img.onerror = function() {
            console.warn('Failed to load image:', url);
        };
    });
}

// Start preloading images when page loads
window.addEventListener('load', preloadImages);
