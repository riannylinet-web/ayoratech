/* =====================
   RESET & BASE STYLES
===================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background: #f4f7f6;
    color: #333;
    line-height: 1.6;
    overflow-x: hidden;
}

/* =====================
   VIBRANT MODERNIZED NAVBAR & LOGO
===================== */
.navbar {
    background: rgba(10, 15, 30, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 2px solid rgba(0, 212, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    color: white;
    padding: 1rem 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.logo-wrapper {
    display: flex;
    align-items: center;
    gap: 15px;
    transition: transform 0.3s ease;
}

.logo-wrapper:hover {
    transform: scale(1.05);
}

.logo-icon {
    width: 45px;
    height: 45px;
    background: linear-gradient(135deg, #00d4ff, #7b2cbf);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 900;
    font-size: 1.5rem;
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.5), 0 0 30px rgba(123, 44, 191, 0.3);
    animation: pulseGlow 2s infinite;
}

@keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 10px rgba(0, 212, 255, 0.5); }
    50% { box-shadow: 0 0 25px rgba(0, 212, 255, 0.9); }
}

.logo-text {
    display: flex;
    flex-direction: column;
    line-height: 1;
}

.logo {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    font-weight: 900;
    letter-spacing: 2px;
    background: linear-gradient(90deg, #fff, #00d4ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.logo-sub {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 5px;
    color: #ffd700;
    margin-top: -5px;
}

nav {
    display: flex;
    gap: 2rem;
}

nav a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;
}

nav a:hover, nav a.active {
    background: rgba(0, 212, 255, 0.2);
    color: #00d4ff;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 212, 255, 0.2);
}

nav a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: #ffd700;
    transition: all 0.3s ease;
    transform: translateX(-50%);
}

nav a:hover::after, nav a.active::after {
    width: 60%;
}

/* =====================
   FANCY HERO SECTION
===================== */
.hero {
    min-height: 95vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 5%;
    background: radial-gradient(circle at 70% 30%, rgba(123, 44, 191, 0.2), transparent 50%), #0a0f1e;
    color: white;
    overflow: hidden;
    position: relative;
}

/* Floating Background Orbs */
.orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.6;
    z-index: 1;
    animation: floatOrb 10s infinite alternate ease-in-out;
}

.orb-1 {
    width: 400px;
    height: 400px;
    background: #00d4ff;
    top: -100px;
    left: -100px;
}

.orb-2 {
    width: 350px;
    height: 350px;
    background: #ffd700;
    bottom: -100px;
    right: -100px;
    animation-delay: 2s;
}

.orb-3 {
    width: 300px;
    height: 300px;
    background: #7b2cbf;
    bottom: 20%;
    left: 40%;
    animation-delay: 4s;
}

@keyframes floatOrb {
    0% { transform: translateY(0) scale(1); }
    100% { transform: translateY(-50px) scale(1.2); }
}

.hero-content {
    position: relative;
    z-index: 10;
    max-width: 50%;
}

.hero-glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 24px;
    padding: 3rem;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
    animation: fadeInUp 1s ease-out;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 215, 0, 0.2);
    color: #ffd700;
    padding: 8px 16px;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(255, 215, 0, 0.3);
}

.hero-glass-card h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 4rem;
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 1.5rem;
}

.gradient-text {
    background: linear-gradient(90deg, #00d4ff, #ffd700);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-glass-card p {
    color: #e0e0e0;
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
}

.hero-buttons {
    display: flex;
    gap: 1.5rem;
}

.btn-primary, .btn-outline {
    padding: 1.2rem 2.5rem;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-primary {
    background: linear-gradient(135deg, #00d4ff, #7b2cbf);
    color: white;
    border: none;
}

.btn-outline {
    background: transparent;
    color: white;
    border: 2px solid #ffd700;
}

.btn-primary:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 212, 255, 0.4);
}

.btn-outline:hover {
    background: #ffd700;
    color: #1a1a2e;
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 40px rgba(255, 215, 0, 0.4);
}

/* FLOATING 3D LAPTOP */
.floating-laptop-container {
    position: relative;
    width: 50%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
}

.glow-effect {
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(0, 212, 255, 0.5), rgba(123, 44, 191, 0.2) 50%, transparent 70%);
    animation: glowPulse 4s infinite alternate;
    z-index: 1;
}

.glow-ring {
    position: absolute;
    width: 550px;
    height: 550px;
    border: 2px dashed rgba(255, 215, 0, 0.5);
    border-radius: 50%;
    animation: rotateRing 20s linear infinite;
}

@keyframes rotateRing {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes glowPulse {
    from { transform: scale(0.8); opacity: 0.6; }
    to { transform: scale(1.2); opacity: 1; }
}

/* Exact laptop image with 3D tilt */
.floating-laptop {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 700px;
    border-radius: 20px;
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 212, 255, 0.3);
    animation: float3D 5s ease-in-out infinite;
    transform-origin: center bottom;
}

@keyframes float3D {
    0%, 100% { 
        transform: perspective(1000px) translateY(0) rotateY(-15deg) rotateX(5deg); 
    }
    50% { 
        transform: perspective(1000px) translateY(-40px) rotateY(-10deg) rotateX(0deg); 
    }
}

.shadow-ellipse {
    position: absolute;
    bottom: 0;
    width: 60%;
    height: 30px;
    background: radial-gradient(ellipse, rgba(0, 0, 0, 0.8), transparent 70%);
    border-radius: 50%;
    filter: blur(15px);
    animation: shadowPulse 5s ease-in-out infinite;
    z-index: 0;
}

@keyframes shadowPulse {
    0%, 100% { transform: scale(1); opacity: 0.7; }
    50% { transform: scale(0.7); opacity: 0.4; }
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .hero {
        flex-direction: column;
        text-align: center;
        gap: 4rem;
        padding-top: 4rem;
    }
    .hero-content {
        max-width: 90%;
    }
    .hero-glass-card h2 {
        font-size: 3rem;
    }
    .hero-buttons {
        justify-content: center;
    }
    .floating-laptop-container {
        width: 90%;
        height: 450px;
    }
}

@media (max-width: 768px) {
    .navbar { flex-direction: column; gap: 1rem; padding: 1rem; }
    nav { gap: 0.5rem; }
    .hero-glass-card { padding: 2rem; }
    .hero-glass-card h2 { font-size: 2.5rem; }
    .floating-laptop-container { height: 350px; }
    .features-grid, .testimonial-grid { grid-template-columns: 1fr; }
    .cta-buttons { flex-direction: column; align-items: center; }
}

/* =====================
   FEATURES SECTION
===================== */
.features {
    padding: 6rem 2rem;
    background: white;
    text-align: center;
}

.features h2, .testimonials h2, .cta h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.8rem;
    color: #1a1a2e;
    margin-bottom: 3rem;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    max-width: 1200px;
    margin: 0 auto;
}

.feature-card {
    background: white;
    border-radius: 20px;
    padding: 2.5rem 2rem;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: all 0.4s ease;
    border: 1px solid #e8e8e8;
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2);
    border-color: #00d4ff;
}

.feature-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    background: linear-gradient(135deg, #00d4ff, #7b2cbf);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
    box-shadow: 0 10px 20px rgba(0, 212, 255, 0.3);
}

.feature-card h3 {
    color: #1a1a2e;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.feature-card p {
    color: #666;
    line-height: 1.7;
}

/* =====================
   TESTIMONIALS
===================== */
.testimonials {
    padding: 6rem 2rem;
    background: linear-gradient(135deg, #f4f7f6 0%, #e9ecef 100%);
    text-align: center;
}

.testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
    max-width: 1200px;
    margin: 0 auto;
}

.testimonial-card {
    background: white;
    padding: 2.5rem;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: all 0.4s ease;
    position: relative;
    border: 1px solid #e8e8e8;
}

.testimonial-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(123, 44, 191, 0.2);
}

.testimonial-card::before {
    content: '"';
    position: absolute;
    top: 20px;
    left: 25px;
    font-size: 5rem;
    color: #00d4ff;
    opacity: 0.2;
    font-family: serif;
}

.testimonial-card p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
    margin-bottom: 1.5rem;
    font-style: italic;
    position: relative;
    z-index: 1;
}

.testimonial-card h4 {
    color: #1a1a2e;
    font-size: 1.2rem;
    font-weight: 600;
}

/* =====================
   CTA SECTION
===================== */
.cta {
    padding: 6rem 2rem;
    text-align: center;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    color: white;
}

.cta p {
    font-size: 1.3rem;
    max-width: 700px;
    margin: 0 auto 2.5rem;
    opacity: 0.9;
}

.cta-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
}

/* =====================
   FLOATING BUTTONS & FOOTER
===================== */
.call-float {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: linear-gradient(135deg, #25D366, #128C7E);
    color: white;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 1.8rem;
    box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
    transition: all 0.3s ease;
    z-index: 1000;
}

.call-float:hover {
    transform: scale(1.1);
    box-shadow: 0 15px 35px rgba(37, 211, 102, 0.6);
}

footer {
    background: #0a0f1e;
    color: white;
    padding: 3rem 2rem 2rem;
    text-align: center;
}

.footer-main {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.footer-credit {
    font-size: 1rem;
    opacity: 0.8;
    margin-top: 1rem;
}

/* =====================
   ANIMATIONS
===================== */
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

.fade-in {
    animation: fadeInUp 1s ease-out;
}

/* =====================
   GLOBAL PAGE STYLES (Products, About, Contact)
===================== */
.products, .about-container, .contact-section {
    padding: 4rem 2rem;
    background: #f4f7f6;
    min-height: 80vh;
}

.container, .about-container, .contact-container {
    max-width: 1200px;
    margin: 0 auto;
}

.section-title, .contact-title {
    text-align: center;
    font-size: 2.8rem;
    color: #1a1a2e;
    margin-bottom: 2rem;
    font-family: 'Montserrat', sans-serif;
}

.filter-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 0.8rem 2rem;
    background: white;
    border: 2px solid #1a1a2e;
    border-radius: 50px;
    color: #1a1a2e;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.filter-btn:hover, .filter-btn.active {
    background: linear-gradient(135deg, #00d4ff, #7b2cbf);
    color: white;
    border-color: transparent;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3);
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.product-card {
    background: white;
    border-radius: 16px;
    padding: 1.5rem;
    text-align: center;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 212, 255, 0.2);
}

.product-card img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    margin-bottom: 1rem;
    border-radius: 8px;
    background: #f8f9fa;
    padding: 1rem;
}

.product-card h3 {
    font-size: 1.3rem;
    color: #1a1a2e;
    margin-bottom: 0.5rem;
}

.product-price {
    font-size: 1.6rem;
    color: #00d4ff;
    font-weight: 700;
    margin-bottom: 1rem;
}

.whatsapp-btn {
    background: linear-gradient(135deg, #25D366, #128C7E);
    color: white;
    border: none;
    padding: 0.9rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.whatsapp-btn:hover {
    background: linear-gradient(135deg, #128C7E, #0D6A5A);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(37, 211, 102, 0.3);
}

.flow-btn {
    display: inline-block;
    padding: 1rem 2.5rem;
    background: linear-gradient(135deg, #00d4ff, #7b2cbf);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 212, 255, 0.2);
}

.flow-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 212, 255, 0.4);
}

/* Search container styles */
.search-container {
    margin: 25px auto 15px;
    max-width: 600px;
}

.search-box {
    position: relative;
    display: flex;
    align-items: center;
    background: white;
    border: 2px solid #00d4ff;
    border-radius: 50px;
    padding: 12px 20px;
    box-shadow: 0 4px 12px rgba(0, 212, 255, 0.15);
}

#productSearch {
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 5px 0;
    background: transparent;
}

#clearSearch {
    background: none;
    border: none;
    color: #999;
    cursor: pointer;
    padding: 5px;
}

.search-results-info {
    text-align: center;
    margin-top: 10px;
    padding: 8px 15px;
    background: #f0f9ff;
    border-radius: 20px;
    color: #00d4ff;
    font-weight: 500;
    display: none;
}

/* About Page */
.about-hero {
    background: linear-gradient(rgba(10, 15, 30, 0.85), rgba(10, 15, 30, 0.9)), url('https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    padding: 5rem 2rem;
    margin-bottom: 3rem;
}

.about-hero h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
}

.about-section-card {
    background: white;
    border-radius: 20px;
    padding: 3rem;
    margin-bottom: 3rem;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
}

.about-section-title {
    color: #1a1a2e;
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid #00d4ff;
    display: inline-block;
}

.about-team-card {
    flex: 1;
    text-align: center;
    background: linear-gradient(145deg, #ffffff, #f5f5f5);
    border-radius: 15px;
    padding: 2.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.about-team-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.5rem;
    border: 5px solid #00d4ff;
    box-shadow: 0 0 25px rgba(0, 212, 255, 0.3);
}

.about-repair-form {
    background: #f8f9fa;
    padding: 2.5rem;
    border-radius: 15px;
    border: 2px solid #e3e3e3;
}

.about-repair-form select,
.about-repair-form textarea,
.about-repair-form input {
    width: 100%;
    padding: 1rem;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: white;
}

.about-repair-form select:focus,
.about-repair-form textarea:focus,
.about-repair-form input:focus {
    outline: none;
    border-color: #00d4ff;
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.2);
}

.about-btn-primary {
    background: linear-gradient(135deg, #00d4ff, #7b2cbf);
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 1rem;
}

.about-btn-primary:hover {
    background: linear-gradient(135deg, #7b2cbf, #00d4ff);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 212, 255, 0.3);
}

/* Contact Page */
.
