
const aboutContent = document.getElementById('about-content');
aboutContent.innerHTML=`
<div class=aboutcontiner>
<div class="about-para">
<h1>About Me</h1>
<p>Get konw me better!</p>
<p class="p1">
I have a strong background in web development and graphic design. I am proficient in HTML and CSS, and I've completed several projects, including a notable one with JavaScript. My commitment to professional growth is reflected in my certifications from FreeCodeCamp in JavaScript and Responsive Web Design,</p>
<div class="social-button">
<div id ="social-media-about">
          <a href="https://www.facebook.com/profile.php?id=100072788701860&mibextid=ZbWKwL"><img src = "image/fb-icon.png"></imge></a>
          <a href="https://www.linkedin.com/in/breshna-hamidi-67699a295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src = "image/in-icon.png"></imge></a>
          <a href=" https://wa.me/message/L4LV3PM672H7P1 "><img src = "image/wsp icon.png"></imge></a>
          <a href="#"><img src = "image/Gb-icon.png"></imge></a>
        </div>
        <div>
        <button>click here to see me!</button>
        </div>
      </div>
      </div>
      <div class="slider1">
            <div class="slide1 actives1"><img src="image/pro-6.jfif" alt="Image 1"></div>
            <div class="slide1"><img src="image/pro-2.jfif" alt="Image 2"></div>
            <div class="slide1"><img src="image/pro-3.jfif" alt="Image 3"></div>
            <div class="slide1"><img src="image/pro-4.jfif" alt="Image 2"></div>
            <div class="slide1"><img src="image/pro-5.jfif" alt="Image 3"></div>
            <div class="circles1"></div>
          </div>
</div>       
<div class="expert-year">
<div>12+
<p>Years of Experience</p>
</div>
<div>
12+
<p>Years of Experience</p>
</div>
</div>

<div class="my-expert">
<h2>What I do?</h2>
<div class="expert-list">
  <div><img src="image/html.jpg"><p>I am expert at HTML</p></div>
  <div><img src="image/css.jpg"><p>I am expert at CSS</p></div>
  <div><img src="image/java.jpg"><p>I am expert at JavaScript</p></div>
  <div><img src="image/botestrap.jpg"><p>I am expert at Botestrap</p></div>
  </div>
</div>
`;
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

