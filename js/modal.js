// Get modal elements
var modal = document.getElementById("imgModal");
var modalImg = document.getElementById("modalImg");
var span = document.getElementsByClassName("close")[0];

// Open modal on image click
document.querySelectorAll('.card-img-top').forEach(function(img) {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
});

// Close modal when the 'x' is clicked
span.onclick = function() {
  modal.style.display = "none";
}

// Close modal when clicking outside of the image
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
