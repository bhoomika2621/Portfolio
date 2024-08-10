document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    alert('Thank you for your message! I will get back to you soon.');
    // Here you can add code to send the form data to your email or server
    this.reset(); // Clear the form after submission
});
