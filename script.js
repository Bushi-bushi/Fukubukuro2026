document.addEventListener('DOMContentLoaded', () => {
    // Configuration
    const SALE_START_DATE = '2025-12-15T12:00:00';

    // Check parameters
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');

    // Determine status
    let isOnSale = false;

    if (mode === 'sale') {
        isOnSale = true;
    } else {
        const now = new Date();
        const saleStart = new Date(SALE_START_DATE);
        isOnSale = now >= saleStart;
    }

    // UI Elements
    const preSaleBanner = document.getElementById('pre-sale-banner');
    const onSaleBanner = document.getElementById('on-sale-banner');

    // Toggle Hero Banners
    if (isOnSale) {
        if (preSaleBanner) preSaleBanner.style.display = 'none';
        if (onSaleBanner) onSaleBanner.style.display = 'block';
    } else {
        if (preSaleBanner) preSaleBanner.style.display = 'block';
        if (onSaleBanner) onSaleBanner.style.display = 'none';
    }

    // Product Cards Logic
    const products = document.querySelectorAll('.product-card');

    products.forEach(card => {
        const id = card.getAttribute('data-id');
        const isPremium = id === 'premium';
        let limit = parseInt(card.getAttribute('data-limit') || '0', 10);

        // Buttons
        const presaleBtns = card.querySelectorAll('.btn-presale');
        const onsaleBtns = card.querySelectorAll('.btn-onsale');

        // Badges
        const remainingBadge = card.querySelector('.remaining-badge');
        const countSpan = card.querySelector('.count');

        if (isOnSale) {
            // Hide pre-sale buttons, show on-sale buttons
            presaleBtns.forEach(btn => btn.style.display = 'none');
            onsaleBtns.forEach(btn => btn.style.display = 'inline-block');

            // Logic for remaining count (Mock logic similar to React version)
            if (!isPremium) {
                // Mock: roughly 40% remaining
                let remaining = Math.max(1, Math.floor(limit * 0.4));

                // Update badge
                if (remainingBadge && countSpan) {
                    countSpan.textContent = remaining;
                    remainingBadge.style.display = 'block';
                }

                // Handle Sold Out state (not actually triggered in this mock, but logic matches React)
                if (remaining <= 0) {
                    onsaleBtns.forEach(btn => {
                        btn.textContent = 'SOLD OUT';
                        btn.classList.add('btn-disabled');
                        btn.classList.remove('btn-primary');
                        btn.disabled = true;
                    });
                }
            }
        } else {
            // Pre-sale state
            presaleBtns.forEach(btn => btn.style.display = 'inline-block');
            onsaleBtns.forEach(btn => btn.style.display = 'none');

            if (remainingBadge) remainingBadge.style.display = 'none';
        }
    });

    // Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(element => {
        observer.observe(element);
    });

    console.log(`App initialized. Mode: ${isOnSale ? 'On Sale' : 'Pre-Sale'}`);
});
