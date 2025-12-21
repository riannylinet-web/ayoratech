// WhatsApp phone number
const phoneNumber = "254112318201";

// Function to send quick message via WhatsApp
function sendQuickMessage() {
    const name = document.getElementById('quickName').value.trim();
    const phone = document.getElementById('quickPhone').value.trim();
    const message = document.getElementById('quickMessage').value.trim();
    
    // Validate inputs
    if (!name || !phone) {
        alert('Please enter your name and phone number');
        return;
    }
    
    // Validate phone number
    const phoneRegex = /^[0-9\s\+\-\(\)]{10,15}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
        alert('Please enter a valid phone number (10-15 digits)');
        return;
    }
    
    // Create WhatsApp message
    const whatsappMessage = `📞 CONTACT MESSAGE - AYORA TECH 📞

👤 Sender Details:
• Name: ${name}
• Phone: ${phone}

💬 Message:
${message || 'No message provided'}

---
📅 Sent on: ${new Date().toLocaleDateString('en-KE', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
})}

📍 From AYORA TECH Contact Page
📞 Please contact me back via WhatsApp/Call`;

    // Open WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
    
    // Clear form
    document.getElementById('quickName').value = '';
    document.getElementById('quickPhone').value = '';
    document.getElementById('quickMessage').value = '';
    
    // Show success notification
    showNotification('Message prepared for WhatsApp!', 'success');
}

// Function to show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 2000;
        display: flex;
        align-items: center;
        gap: 12px;
        animation: slideIn 0.3s ease;
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

// Function to format phone number
function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 0) {
        if (value.length <= 3) {
            value = value;
        } else if (value.length <= 6) {
            value = value.slice(0, 3) + ' ' + value.slice(3);
        } else if (value.length <= 9) {
            value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6);
        } else {
            value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6, 9) + ' ' + value.slice(9, 12);
        }
    }
    input.value = value;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set active nav link
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Phone number formatting
    const phoneInput = document.getElementById('quickPhone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            formatPhoneNumber(this);
        });
    }
    
    // Make all phone numbers in contact items clickable
    document.querySelectorAll('.phone-number').forEach(phoneElement => {
        phoneElement.style.cursor = 'pointer';
        phoneElement.title = 'Click to call';
        phoneElement.addEventListener('click', function() {
            const phoneNumber = this.textContent.trim();
            window.open(`tel:${phoneNumber}`);
        });
    });
    
    // Add click event to send message button
    const sendBtn = document.querySelector('.send-message-btn');
    if (sendBtn) {
        sendBtn.addEventListener('click', sendQuickMessage);
    }
    
    // Add Enter key support for form
    document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                if (this.id === 'quickMessage') {
                    sendQuickMessage();
                }
            }
        });
    });
    
    // Mobile optimizations
    if (window.innerWidth <= 768) {
        // Make contact items more touch-friendly
        document.querySelectorAll('.contact-item').forEach(item => {
            item.style.minHeight = 'auto';
        });
        
        // Increase touch targets
        document.querySelectorAll('a, button').forEach(element => {
            element.style.minHeight = '44px';
            element.style.minWidth = '44px';
        });
        
        // Add touch feedback
        document.querySelectorAll('.whatsapp-action-btn, .call-action-btn, .products-action-btn, .about-action-btn').forEach(btn => {
            btn.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            btn.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
    
    // Add animation for contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });
});