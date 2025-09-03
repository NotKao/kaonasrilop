// Example: log projects and blog posts
const projects = document.querySelectorAll('.project');
const blogPosts = document.querySelectorAll('article');
console.log(`Projects: ${projects.length}, Blog posts: ${blogPosts.length}`);

// Example: handle contact form submission
const form = document.getElementById('contact-form');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    form.reset();
  });
}
