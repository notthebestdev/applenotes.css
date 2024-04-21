document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('ul.custom-bullets li').forEach(item => {
    item.addEventListener('click', function() {
      this.classList.toggle('checked');
    });
  });

  // Transforming all <img> elements to have rounded corners
  document.querySelectorAll('img').forEach(img => {
    img.style.borderRadius = '20px'; // Sets rounded corners for images
  });
});
