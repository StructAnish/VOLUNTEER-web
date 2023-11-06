// JavaScript for registration.html

// Wait for the page to load before running JavaScript
document.addEventListener('DOMContentLoaded', function () {

    const registrationForm = document.getElementById('registrationForm');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting

            // Implement form validation here
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const termsCheckbox = document.getElementById('terms');

            // Example: Basic form validation
            if (username === '' || email === '' || password === '' || confirmPassword === '' || !termsCheckbox.checked) {
                alert('Please fill in all required fields and accept the terms and conditions.');
            } else if (password !== confirmPassword) {
                alert('Passwords do not match.');
            } else {
                // Form is valid; you can submit it to the server or take other actions
                alert('Registration successful!');
                // You can add AJAX requests to submit the form data to your server.
            }
        });
    }

    // Add more JavaScript functionality specific to the registration page.

});
