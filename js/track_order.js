// Intersection Observer to trigger animations when elements are in the viewport
const observerOptions = {
  threshold: 0.2 // 20% of the element must be visible
};

const animateOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeIn');
      observer.unobserve(entry.target); // Stop observing after animation
    }
  });
};

const observer = new IntersectionObserver(animateOnScroll, observerOptions);

// Target elements for animation
const animatedElements = document.querySelectorAll('.animate__animated');
animatedElements.forEach((el) => observer.observe(el));

// Leaflet Map initialization
const map = L.map('map').setView([41.1579, -8.6291], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([41.5503, -8.4200]).addTo(map).bindPopup('Warehouse: Braga').openPopup();
L.marker([41.1579, -8.6291]).addTo(map).bindPopup('Delivery to: Porto');

// Animate the map section when it enters the viewport
observer.observe(document.getElementById('map-container'));
