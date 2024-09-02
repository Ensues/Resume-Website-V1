// Contact Form Submission (Dummy Implementation)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Dummy form submission message
    alert('Thank you for your message! I will get back to you soon.');

    // Reset form fields
    document.getElementById('contact-form').reset();
});
