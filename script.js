// script.js – full interactions with FAQ dropdown
document.addEventListener('DOMContentLoaded', function() {
    
    // Get Custom Quote button
    const quoteBtn = document.getElementById('quoteBtn');
    if(quoteBtn) {
        quoteBtn.addEventListener('click', function() {
            alert('Thank you for your interest! A sales representative will contact you shortly with a custom quote.');
        });
    }

    // View Technical Specs button
    const specsBtn = document.getElementById('specsBtn');
    if(specsBtn) {
        specsBtn.addEventListener('click', function() {
            const specSection = document.querySelector('.spec-section');
            if(specSection) specSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Download Full Technical Datasheet button
    const downloadBtn = document.getElementById('downloadBtn');
    if(downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            alert('Your download will begin shortly.\n(Simulated download: Technical Datasheet.pdf)');
        });
    }

    // Request Catalogue button
    const requestCatalogueBtn = document.getElementById('requestCatalogueBtn');
    if(requestCatalogueBtn) {
        requestCatalogueBtn.addEventListener('click', function() {
            const emailInput = document.getElementById('catalogueEmail');
            const email = emailInput ? emailInput.value.trim() : '';
            if(email && email.includes('@') && email.includes('.')) {
                alert(`Catalogue request sent to ${email}. An expert will share the catalogue with you soon.`);
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // FAQ Dropdown Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other open FAQs (optional - remove if you want multiple open)
            faqItems.forEach(otherItem => {
                if(otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current FAQ
            item.classList.toggle('active');
        });
    });

    // "Learn More" buttons in portfolio
    const learnMoreBtns = document.querySelectorAll('.portfolio-item .learn-more');
    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.portfolio-item');
            const title = card ? card.querySelector('h3')?.innerText : 'item';
            alert(`You clicked Learn More for: ${title}\n(Full product details would be shown here.)`);
        });
    });

    // "Learn More" in talk-experts
    const talkLearnMore = document.querySelector('.talk-experts .learn-more');
    if(talkLearnMore) {
        talkLearnMore.addEventListener('click', function() {
            alert('Redirecting to custom solutions page...');
        });
    }

    // "Talk to an Expert" button
    const expertBtn = document.getElementById('expertBtn');
    if(expertBtn) {
        expertBtn.addEventListener('click', function() {
            alert('Connecting you to an expert. Please wait...');
        });
    }

    // Download PDF buttons in Resources
    const downloadPdfBtns = document.querySelectorAll('.download-pdf');
    downloadPdfBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const docType = this.getAttribute('data-doc') || 'document';
            alert(`Preparing download for ${docType}.pdf`);
        });
    });

    // Request Custom Quote (bottom form)
    const requestQuoteBtn = document.getElementById('requestQuoteBtn');
    if(requestQuoteBtn) {
        requestQuoteBtn.addEventListener('click', function() {
            const fullName = document.getElementById('fullName')?.value || 'Not provided';
            const company = document.getElementById('companyName')?.value || 'Not provided';
            const email = document.getElementById('contactEmail')?.value || 'Not provided';
            const phone = document.getElementById('phoneNumber')?.value || 'Not provided';
            
            alert(`Quote requested for:\nName: ${fullName}\nCompany: ${company}\nEmail: ${email}\nPhone: +91 ${phone}\n\nOur team will respond within 24 hours.`);
        });
    }
});