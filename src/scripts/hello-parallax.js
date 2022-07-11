const parallax = document.querySelector('.parallax');
const parallaxLayers = parallax.children;
const windowWidth = document.body.clientWidth;
const exeptionLayer = [6, 2]

if (windowWidth > 768) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    Array.from(parallaxLayers).forEach((layer, index) => {
      const transformY = `${scrollY / (-(index+1) * 70)}%`;
      if (!exeptionLayer.includes(index)) {
        layer.style.transform = `translateY(${transformY})`;
      }  else if (index == 2) {
        layer.style.transform = `translateX(${transformY})`;
      }       
    })
  })
}