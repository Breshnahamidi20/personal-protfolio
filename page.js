const hamMenu = document.querySelector('.ham-menu');
const mobileMenu = document.querySelector('.mobile-menu');
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

document.querySelectorAll('#mobile-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.mobile-menu.active').classList.add('hidden');
    document.querySelector('.ham-menu.active span:nth-child(1)').classList.add('hidden');
    document.querySelector('.ham-menu.active span:nth-child(3)').classList.add('hidden');
  });
});

const popup1 = document.getElementById('popup1');
const popup1Btn = document.getElementById('menuImg');
const close1Btn = document.getElementById('close1Btn');

popup1Btn.addEventListener('click', () => {
  popup1.style.display = 'block';
});

close1Btn.addEventListener('click', () => {
  popup1.style.display = 'none';
});

const slides = document.querySelectorAll('.slide');
const circles = document.querySelector('.circles');
let currentSlide = 0;

function setActiveSlide(index) {
  slides[currentSlide].classList.remove('actives');
  circles.children[currentSlide].classList.remove('actives');
  circles.children[currentSlide].style.backgroundColor = 'white';
  currentSlide = index;
  slides[currentSlide].classList.add('actives');
  circles.children[currentSlide].classList.add('actives');
  circles.children[currentSlide].style.backgroundColor = '#511F52';
}

slides.forEach((slide, index) => {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.addEventListener('click', () => {
      setActiveSlide(index);
    });
    circles.appendChild(circle);
  });


