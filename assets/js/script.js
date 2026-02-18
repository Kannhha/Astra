// Typewriter Animation Effect - Word by Word with Proper Spacing
document.addEventListener('DOMContentLoaded', function() {
  
  // Function to create typewriter effect on an element - word by word
  function typeWriterWordByWord(element, speed = 100) {
    const originalText = element.innerText;
    const words = originalText.split(' ');
    element.innerText = '';
    let wordIndex = 0;
    
    function typeWord() {
      if (wordIndex < words.length) {
        // Add word with space after it (except for last word)
        if (wordIndex === 0) {
          element.innerText += words[wordIndex];
        } else {
          element.innerText += ' ' + words[wordIndex];
        }
        wordIndex++;
        setTimeout(typeWord, speed);
      }
    }
    
    typeWord();
  }
  
  // Apply typewriter effect to headings first
  const headings = document.querySelectorAll('h1, h2, h3');
  let totalDelay = 0;
  
  headings.forEach((heading) => {
    setTimeout(() => {
      typeWriterWordByWord(heading, 80);
    }, totalDelay);
    // Add delay for next element based on word count
    const wordCount = heading.innerText.split(' ').length;
    totalDelay += (wordCount * 80) + 300; // Add 300ms buffer between elements
  });
  
  // Apply typewriter effect to paragraphs
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach((para) => {
    setTimeout(() => {
      typeWriterWordByWord(para, 70);
    }, totalDelay);
    const wordCount = para.innerText.split(' ').length;
    totalDelay += (wordCount * 70) + 300;
  });
  
  // Apply typewriter effect to list items
  const listItems = document.querySelectorAll('li');
  listItems.forEach((item) => {
    setTimeout(() => {
      typeWriterWordByWord(item, 70);
    }, totalDelay);
    const wordCount = item.innerText.split(' ').length;
    totalDelay += (wordCount * 70) + 200;
  });
});
