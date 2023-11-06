// JavaScript for event.html

// Wait for the page to load before running JavaScript
document.addEventListener('DOMContentLoaded', function () {

    // Example: Handling event registration
    const registerButton = document.getElementById('registerButton');

    if (registerButton) {
        registerButton.addEventListener('click', function () {
            // Handle the event registration here
            alert('You are now registered for this event.');
            // You can implement the logic to update the registration status or send confirmation emails.
        });
    }

    // Add more JavaScript functionality specific to the event page.

});
