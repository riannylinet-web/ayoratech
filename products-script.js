// WhatsApp phone number
const phoneNumber = "254112318201";

// ========== SEARCH FUNCTIONALITY ========== //
function initializeSearch() {
    const searchInput = document.getElementById('productSearch');
    const clearBtn = document.getElementById('clearSearch');
    const productCards = document.querySelectorAll('.product-card');
    const searchResultsInfo = document.getElementById('searchResultsInfo');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    if (!searchInput) return;
    
    // Clear search button
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            searchInput.value = '';
            searchInput.focus();
            performSearch('');
        });
    }
    
    // Real-time search
    let searchTimeout;
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch(e.target.value);
        }, 200);
    });
    
    // Perform the actual search
    function performSearch(searchTerm = '') {
        searchTerm = searchTerm.toLowerCase().trim();
        const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
        let visibleCount = 0;
        
        productCards.forEach(card => {
            const productName = card.dataset.name.toLowerCase();
            const productCategory = card.dataset.category;
            const productText = card.textContent.toLowerCase();
            
            // Check if card passes the active filter
            const passesFilter = activeFilter === 'all' || productCategory === activeFilter;
            
            // Check if card matches search term
            let matchesSearch = true;
            if (searchTerm) {
                matchesSearch = productName.includes(searchTerm) ||
                              productText.includes(searchTerm) ||
                              productCategory.includes(searchTerm);
            }
            
            // Show/hide card
            const shouldShow = passesFilter && matchesSearch;
            card.style.display = shouldShow ? 'flex' : 'none';
            
            if (shouldShow) {
                visibleCount++;
                
                // Highlight matching text (optional)
                if (searchTerm) {
                    highlightText(card, searchTerm);
                } else {
                    removeHighlights(card);
                }
            } else {
                removeHighlights(card);
            }
        });
        
        // Update search results info
        updateSearchInfo(searchTerm, visibleCount, activeFilter);
    }
    
    // Highlight matching text
    function highlightText(element, searchTerm) {
        removeHighlights(element);
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
        const nodes = [];
        let node;
        
        while (node = walker.nextNode()) {
            if (node.textContent.match(regex)) {
                nodes.push(node);
            }
        }
        
        nodes.forEach(node => {
            const span = document.createElement('span');
            span.className = 'search-match';
            span.innerHTML = node.textContent.replace(regex, '<mark>$1</mark>');
            node.parentNode.replaceChild(span, node);
        });
    }
    
    // Remove highlights
    function removeHighlights(element) {
        const matches = element.querySelectorAll('.search-match');
        matches.forEach(match => {
            const text = document.createTextNode(match.textContent);
            match.parentNode.replaceChild(text, match);
        });
    }
    
    // Update search results information
    function updateSearchInfo(searchTerm, visibleCount, activeFilter) {
        if (!searchResultsInfo) return;
        
        let message = '';
        
        if (searchTerm) {
            message = `Found ${visibleCount} product${visibleCount !== 1 ? 's' : ''} for "${searchTerm}"`;
            if (activeFilter !== 'all') {
                message += ` in ${activeFilter === 'laptop' ? 'Laptops' : 'Accessories'}`;
            }
            searchResultsInfo.style.display = 'block';
        } else if (activeFilter !== 'all') {
            message = `Showing ${visibleCount} ${activeFilter === 'laptop' ? 'laptop' : 'accessory'} product${visibleCount !== 1 ? 's' : ''}`;
            searchResultsInfo.style.display = 'block';
        } else {
            searchResultsInfo.style.display = 'none';
            return;
        }
        
        searchResultsInfo.textContent = message;
    }
    
    // Sync search with filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const searchTerm = searchInput.value;
            performSearch(searchTerm);
        });
    });
    
    // Initial search state
    performSearch('');
}

// ========== WHATSAPP FUNCTION (DIRECT) ========== //
function sendToWhatsApp(button) {
    const productCard = button.closest('.product-card');
    const productName = productCard.dataset.name;
    const productPrice = productCard.dataset.price;
    const productCategory = productCard.dataset.category;
    const productDescription = productCard.querySelector('p').textContent;

    // Simple WhatsApp message
    const message = `Hello AYORA TECH,

I'm interested in this product:

📦 Product: ${productName}
💰 Price: ${productPrice}
📝 Description: ${productDescription}

Please send me more details.`;

    // Open WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// ========== MAIN INITIALIZATION ========== //
document.addEventListener('DOMContentLoaded', function() {
    // Initialize search
    initializeSearch();
    
    // Add WhatsApp button event listeners
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
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            productCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Set active nav link
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
