// Typewriter Animation Effect for Terminal-style Text
document.addEventListener('DOMContentLoaded', function() {
  
  // Function to create typewriter effect on an element
  function typeWriter(element, speed = 50) {
    const text = element.innerText;
    element.innerText = '';
    let index = 0;
    
    function type() {
      if (index < text.length) {
        element.innerText += text.charAt(index);
        index++;
        setTimeout(type, speed);
      }
    }
    
    type();
  }
  
  // Apply typewriter effect to headings
  const headings = document.querySelectorAll('h1, h2, h3');
  headings.forEach((heading, i) => {
    setTimeout(() => {
      typeWriter(heading, 50);
    }, i * 100);
  });
  
  // Apply typewriter effect to paragraphs
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach((para, i) => {
    setTimeout(() => {
      typeWriter(para, 30);
    }, (headings.length * 100) + (i * 80));
  });
  
  // Apply typewriter effect to list items
  const listItems = document.querySelectorAll('li');
  listItems.forEach((item, i) => {
    setTimeout(() => {
      typeWriter(item, 30);
    }, (headings.length * 100) + (paragraphs.length * 80) + (i * 60));
  });
});
