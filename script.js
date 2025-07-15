// Animation fade-in sur les boutons au chargement
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.btn').forEach((btn, i) => {
    btn.style.opacity = 0;
    btn.style.transform = 'translateY(20px)';
    setTimeout(() => {
      btn.style.transition = 'opacity 0.5s, transform 0.5s';
      btn.style.opacity = 1;
      btn.style.transform = 'none';
    }, 300 + i * 120);
    // Effet clic
    btn.addEventListener('mousedown', () => {
      btn.style.transform = 'scale(0.97)';
    });
    btn.addEventListener('mouseup', () => {
      btn.style.transform = 'none';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'none';
    });
  });
}); 