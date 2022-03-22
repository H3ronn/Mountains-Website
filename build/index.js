const header = document.querySelector('#header');
const backgroundImages = [...document.querySelectorAll('.backgroundImage')];

const handleScroll = () => {
  const opacity = (1 - (window.scrollY / 800 )).toFixed(2);
  header.style.opacity = opacity;
  if (opacity < 0){
    header.style.opacity = 0;
  }

  const translateValue = 0 - (window.scrollY / 23.5);
  translateBackgroundImages(translateValue)  
}

const translateBackgroundImages = (value) => {
  if(value < -30) return
  backgroundImages[0].style.transform = `translate3d(0px, ${value*2}%, 0px)`;
  backgroundImages[1].style.transform = `translate3d(0px, ${value}%, 0px)`;
  backgroundImages[2].style.transform = `translate3d(0px, ${value/3}%, 0px)`;
}

window.addEventListener('scroll', handleScroll);

