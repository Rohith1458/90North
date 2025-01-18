
function toggleMenu() {
  const leftMenu = document.getElementById('leftMenu');
  leftMenu.classList.toggle('collapsed');
}

function adjustPageScale() {
  const width = window.innerWidth;
  const scale = 
    width <= 600 ? 0.5 :
    width <= 700 ? 0.75 :
    width <= 767 ? 0.8 :
    width <= 1600 ? 0.9 : 1;

  document.body.style.transform = `scale(${scale})`;
  document.body.style.transformOrigin = 'top left';
}

window.addEventListener('resize', adjustPageScale);

// Initial adjustment
adjustPageScale();

