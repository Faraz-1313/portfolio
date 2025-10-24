window.addEventListener('scroll', () => {
  document.querySelectorAll('.project-card').forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      card.style.transform = "translateY(0)";
      card.style.opacity = 1;
    }
  });
});
  