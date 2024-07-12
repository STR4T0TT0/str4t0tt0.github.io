// assets/js/tag-layout.js
document.addEventListener("DOMContentLoaded", function() {
  // Initially collapse all lists
  const allTags = document.querySelectorAll('.tags ul');
  allTags.forEach(ul => {
    ul.style.display = 'none';
  });

  // Toggle tags under main skill
  const mainSkills = document.querySelectorAll('.main-skill h2');
  mainSkills.forEach(skill => {
    skill.addEventListener('click', function() {
      skill.classList.toggle('open');
      const tags = skill.nextElementSibling;
      if (tags) {
        tags.classList.toggle('open'); // Toggle class for the tags container
      }
    });
  });

  // Toggle articles under tags
  const tags = document.querySelectorAll('.tags h3');
  tags.forEach(tag => {
    tag.addEventListener('click', function() {
      tag.classList.toggle('open');
      const ul = tag.nextElementSibling;
      if (ul) {
        ul.style.display = ul.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
});