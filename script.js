// Add event listener to the contact form
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Send the form data to your server or email
    console.log('Form submitted');
});