// scripts.js

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Form Validation (Basic Example)
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Basic validation logic
    const firstName = signupForm.querySelector('input[type="text"]:nth-child(1)').value.trim();
    const lastName = signupForm.querySelector('input[type="text"]:nth-child(2)').value.trim();
    const twitterHandle = signupForm.querySelector('input[type="text"]:nth-child(3)').value.trim();
    const email = signupForm.querySelector('input[type="email"]').value.trim();

    if (firstName && lastName && twitterHandle && validateEmail(email)) {
        // Submit form or display success message
        alert('Thank you for signing up!');
        signupForm.reset();
    } else {
        alert('Please fill in all fields correctly.');
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}
