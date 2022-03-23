const header = document.querySelector('#header');
const backgroundImages = [...document.querySelectorAll('.backgroundImage')];

const handleScroll = () => {

  const headerOffsetBottom = header.offsetTop + header.offsetHeight;
  const imageOffsetBottom = backgroundImages[2].offsetTop + backgroundImages[2].offsetHeight;
  const opacityChange = imageOffsetBottom-headerOffsetBottom;

  const opacity = (1 - (window.scrollY /  opacityChange*2)).toFixed(2);
  
  header.style.opacity = opacity;
  if (opacity < 0.1){
    header.style.opacity = 0;
  }

  const translateValue = 0 - (window.scrollY / 23.5);
  translateBackgroundImages(translateValue);
}

const translateBackgroundImages = (value) => {
  if(value < -30) return; 
  backgroundImages[0].style.transform = `translate3d(0px, ${value*2}%, 0px)`;
  backgroundImages[1].style.transform = `translate3d(0px, ${value}%, 0px)`;
  backgroundImages[2].style.transform = `translate3d(0px, ${value/3}%, 0px)`;
}

window.addEventListener('scroll', handleScroll);

