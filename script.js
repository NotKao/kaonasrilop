// Highlight current page
const navLinks = document.querySelectorAll('nav a');
const currentPath = window.location.pathname.split('/').pop() || 'index.html';

navLinks.forEach(link => {
  if(link.getAttribute('href') === currentPath) {
    link.style.fontWeight = 'bold';
    link.style.color = '#2980b9';
  }
});

console.log(`Viewing page: ${document.title}`);
