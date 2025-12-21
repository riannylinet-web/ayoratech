// WhatsApp phone number
const phoneNumber = "254112318201";

// Function to send product to WhatsApp with image
function sendToWhatsApp(button) {
    const productCard = button.closest('.product-card');
    const productName = productCard.dataset.name;
    const productPrice = productCard.dataset.price;
    const productImage = productCard.querySelector('img').src;
    const productCategory = productCard.dataset.category;
    const productDescription = productCard.querySelector('p').textContent;

    // Create detailed WhatsApp message
    const message = `🛒 PRODUCT INQUIRY - AYORA TECH 🛒

📦 Product Details:
• Product: ${productName}
• Category: ${productCategory === 'laptop' ? 'Laptop' : 'Accessory'}
• Price: ${productPrice}
• Description: ${productDescription}

🖼️ Product Image: ${productImage}

---
👤 My Details:
• Name: [Your Name]
• Phone: [Your Phone Number]
• Location: [Your Location]

💬 Questions:
[Any questions about this product?]

📍 I saw this product on AYORA TECH website
📅 Inquiry Date: ${new Date().toLocaleDateString('en-KE')}
`;

    // Create success notification
    showNotification();

    // Open WhatsApp with the message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Function to show notification
function showNotification() {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'whatsapp-notification';
    notification.innerHTML = `
        <i class="fab fa-whatsapp"></i>
        <span>Opening WhatsApp with product details...</span>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    notification.style.display = 'flex';
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add event listeners to all WhatsApp buttons
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            sendToWhatsApp(this);
        });
    });
    
    // Product filtering functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            // Filter products
            productCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'flex';
                    card.style.flexDirection = 'column';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Make product cards more interactive
    productCards.forEach(card => {
        // Add hover effect for touch devices
        card.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Preload images for better performance
        const img = card.querySelector('img');
        if (img && !img.complete) {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
        }
    });
    
    // Set active nav link
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Make whole product card clickable on mobile
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function(e) {
                // Only trigger if not clicking on the button
                if (!e.target.closest('.whatsapp-btn')) {
                    const whatsappBtn = this.querySelector('.whatsapp-btn');
                    if (whatsappBtn) {
                        sendToWhatsApp(whatsappBtn);
                    }
                }
            });
        });
    }
});