const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  });
  
  document.querySelectorAll('.teacher-card').forEach(card => {
    observer.observe(card);
  });