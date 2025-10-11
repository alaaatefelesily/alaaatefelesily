// تأثير التمرير السلس
document.addEventListener('DOMContentLoaded', function() {
    // التمرير السلس للروابط
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // تأثير الظهور عند التمرير
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // مراقبة العناصر لإضافة تأثيرات الظهور
    const animatedElements = document.querySelectorAll('.info-item, .skill-card, .goal-item, .interest-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // تأثيرات لشريط التنقل
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 30px rgba(0,0,0,0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        }
    });
    
    // معالجة نموذج التواصل
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // هنا يمكنك إضافة كود إرسال النموذج
            alert('شكراً لك! تم استلام رسالتك وسيتم الرد عليك قريباً.');
            contactForm.reset();
        });
    }
});