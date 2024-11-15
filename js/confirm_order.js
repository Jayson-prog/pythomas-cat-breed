const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  });

  // Select all elements with 'slide-up' class
  document.querySelectorAll('.slide-up').forEach((el) => {
    observer.observe(el);
  });