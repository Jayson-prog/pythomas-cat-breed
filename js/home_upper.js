function isInViewport(element, offset = 500) {
  const rect = element.getBoundingClientRect();
  return rect.bottom >= window.innerHeight - offset;
}

function addSlideUpClass(element) {
  element.classList.add('slide-up');
}

function checkAndAnimateCards() {
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach((card, index) => {
    if (isInViewport(card, 500)) {
      setTimeout(() => {
        addSlideUpClass(card);
      }, index * 150); // Adjust the delay for desired timing
    }
  });
}

window.addEventListener('load', checkAndAnimateCards);
window.addEventListener('scroll', checkAndAnimateCards);