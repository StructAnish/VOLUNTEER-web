// JavaScript for index.html

// Wait for the page to load before running JavaScript
document.addEventListener('DOMContentLoaded', function () {

    // Example: Handling a button click event
    const signUpButton = document.getElementById('signUpButton');

    if (signUpButton) {
        signUpButton.addEventListener('click', function () {
            // Handle the sign-up button click event here
            alert('Sign Up button clicked!');
            // You can implement the logic to navigate to the registration page or perform other actions.
        });
    }

    // Example: Dynamically updating content
    const dynamicContentDiv = document.getElementById('dynamicContent');

    if (dynamicContentDiv) {
        // You can dynamically update content on the page using JavaScript
        dynamicContentDiv.innerHTML = 'This is dynamically updated content.';
    }

    // Add more JavaScript functionality as needed for your website.

});
