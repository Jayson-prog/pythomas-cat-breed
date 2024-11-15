function handleScroll() {
    document.querySelectorAll('.content-container').forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  }

  document.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);