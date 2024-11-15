const slideUpElements = document.querySelectorAll('.slide-up');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    slideUpElements.forEach(el => observer.observe(el));