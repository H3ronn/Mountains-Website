window.addEventListener('scroll', () => {
  const opacity = (1 - (window.scrollY / 800 )).toFixed(2);
  const header = document.querySelector('#header');
  header.style.opacity = opacity;
  if (opacity < 0){
    header.style.opacity = 0;
  }
});