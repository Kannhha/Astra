// Simple Fade-in Animation on Page Load
document.addEventListener('DOMContentLoaded', function() {
  
  // Add fade-in class to all elements with a staggered delay
  const allElements = document.querySelectorAll('h1, h2, h3, p, li, blockquote, hr');
  
  allElements.forEach((element, index) => {
    // Add fade-in animation with staggered delay
    element.style.animation = `fadeInElement 0.8s ease-out ${index * 0.1}s forwards`;
    element.style.opacity = '0';
  });
});
