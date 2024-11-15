function toggleReviews() {
    const hiddenReviews = document.querySelectorAll('.review-card.hidden');
    const toggleButton = document.getElementById('toggleReviewsButton');

    // Check if we are loading more or seeing less
    const isExpanding = toggleButton.textContent === 'Load More Reviews';

    // Show or hide the additional reviews based on button text
    hiddenReviews.forEach(review => {
        review.style.display = isExpanding ? 'block' : 'none';
    });

    // Toggle button text
    toggleButton.textContent = isExpanding ? 'See Less' : 'Load More Reviews';
}