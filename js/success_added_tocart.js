// Select all buttons with the class 'add-to-cart'
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const successMessage = document.getElementById('success-message');

// Loop through all the buttons and add event listeners
addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Show the success message
    successMessage.style.display = 'block';

    // Hide the message after 2 seconds
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 2000);
  });
});