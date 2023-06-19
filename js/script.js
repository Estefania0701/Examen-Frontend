const toggleBtn = document.getElementById('toggle-btn');
const elements = document.querySelectorAll('.articles-best-month article:nth-child(odd)');

toggleBtn.addEventListener('click', function() {
  elements.forEach(function(element) {
    element.style.display = (element.style.display === 'none') ? 'flex' : 'none';
  });
});