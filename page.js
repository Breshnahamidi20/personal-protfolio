const slides1 = document.querySelectorAll('.slide1');
const circles1 = document.querySelector('.circles1');

slides1.forEach((slide1, index) => {
  const circle1 = document.createElement('div');
  circle1.classList.add('circle1');
  circle1.addEventListener('click', () => {
    setActiveSlide(index)
    ;
  
  });
  circles1.appendChild(circle1);
});

let currentSlide = 0;
setActiveSlide(currentSlide);

function setActiveSlide(index) {
  slides1[currentSlide].classList.remove('actives1');
  circles1.children[currentSlide].classList.remove('actives1');
  circles1.children[currentSlide].style.backgroundColor ='white';
  currentSlide = index;
  slides1[currentSlide].classList.add('actives1');
  circles1.children[currentSlide].classList.add('actives1');
  circles1.children[currentSlide].style.backgroundColor ='black';
}

