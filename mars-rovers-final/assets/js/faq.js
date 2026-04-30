document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('.faq-icon');
            const isOpen = this.getAttribute('aria-expanded') === 'true';
            
            if (isOpen) {
                this.setAttribute('aria-expanded', 'false');
                answer.classList.remove('active');
                icon.textContent = '+'; // Change back to +
            } else {
                this.setAttribute('aria-expanded', 'true');
                answer.classList.add('active');
                icon.textContent = '−'; // Change to − (minus)
            }
        });
    });
});