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

const div = document.getElementById('main1');

function hideShow() {
  if (display === 0) {
    div.style.display = 'none';
    display = 1;
  } else {
    div.style.display = 'block';
    display = 0;
  }
}

// Data for the response cards
const cardData = [
  {
    image: 'image/respon-html.png',
    titile: 'Responsive Web Design',
    description: 'FreeCodeCamp certificate for completing the Responsive Web Design course.',
    link: 'https://www.freecodecamp.org/certification/fccef9db32b-83b2-4444-a713-d369c0ba2b20/responsive-web-design',
  },
  {
    image: 'image/java-certif.png',
    titile: 'JavaScript Certificate',
    description: 'FreeCodeCamp certificate for 300 hours of JavaScript coursework completion.',
    link: 'https://www.freecodecamp.org/certification/fccef9db32b-83b2-4444-a713-d369c0ba2b20/javascript-algorithms-and-data-structures-v8',
  },
  {
    image: 'image/repv-c.png',
    titile: 'Graphic Design',
    description: 'OJWA certificate in Web Design and Graphic Design.',
    link: 'https://www.example.com/image1',
  },
];
// Container to hold the dynamically created cards
const certificateContiner = document.getElementById('certificate-continer');

// Create response cards dynamically
cardData.forEach((card) => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('response-card');

  cardElement.innerHTML = `
  
    <a href="${card.link}"><img src="${card.image}" alt="Image"></a>
    <h2>${card.titile}</h2>
    <p>${card.description}</p>
    
  `;

  certificateContiner.appendChild(cardElement);
});

// project popuo

const projectData = [
  {
    image: 'image/covert-p.png',
    titile: 'Roman Numerals Converter',
    description: 'A web app that converts numbers to Roman numerals and checks if they are even or odd.',
    button: 'See More',
    longDescription: 'The Roman Numeral Converter is a web application designed to convert numbers between Roman numerals and Arabic numerals. The app provides an easy-to-use interface for users to input a number and get its equivalent in Roman numerals, or vice versa.The app uses JavaScript to handle the conversion logic. CSS is used to style the user interface, providing a clean and modern look. The design is mobile-first, ensuring that the app works well on a variety of devices.',
    technologys: ['HTML', 'CSS', 'Git', 'GitHub'],
    liveLink: 'https://breshnahamidi20.github.io/roman-numeral-converted/',
    sourceLink: 'https://github.com/Breshnahamidi20/roman-numeral-converted',
  },

  {
    image: 'image/pokemo-p.png',
    titile: 'The Pokémon Search App',
    description: 'A web application that allows users to search for Pokémon by name or ID.',
    button: 'See More',
    longDescription: 'The Pokémon Search App is a web application designed to allow users to search for Pokémon and view their details. The app interacts with the Pokémon API to fetch real-time data about various Pokémon, including their names, types, abilities, and stats. Users can type the name of any Pokémon into the search bar and retrieve detailed information about that Pokémon.The app uses JavaScript for making API requests and handling responses. CSS is used to style the user interface, providing a clean and modern look. The design is mobile-first, ensuring that the app works well on a variety of devices.',
    liveLink: 'https://breshnahamidi20.github.io/pokemon/',
    sourceLink: 'https://github.com/Breshnahamidi20/pokemon',
  },

  {
    image: 'image/number-p.png',
    titile: 'Phone Validator App',
    description: 'The Telephone Validator project is designed to validate and standardize phone numbers, enhancing data integrity and usability for contact management.',
    button: 'See More',
    longDescription: 'The Telephone Validator is a web application designed to validate telephone numbers based on various formats and rules. The app allows users to input a telephone number and check if it conforms to the specified format, handling international codes, area codes, and local numbers.The app uses JavaScript to perform telephone number validation and format checking. CSS is used to style the user interface, providing a clean and modern look. The design is mobile-first, ensuring compatibility across various devices.',
    liveLink: '//breshnahamidi20.github.io/phone-number-validator-1/',
    sourceLink: '//github.com/Breshnahamidi20/phone-number-validator-1',
  },
];

const projectContainer = document.getElementById('project-continer');

// Function to create and show the popup
function openPopup (longDescription, titile, image, liveLink, sourceLink){
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <div class='popup-content'>
    <h2>${titile}</h2>
    <img src='${image}'>
      <p>${longDescription}</p>
      <div class='popup-btn'>
      <a href='${liveLink}'><button class='live-link'>Live Demo</button></a>
      <a href='${sourceLink}'><button class='source-link'>source code</button></a>
      </div>
      
    </div>
    <span class='close-popup' onclick='this.parentElement.remove()'>&times;</span>
  `;
  projectContainer.appendChild(popup);
}

projectData.forEach((project) => {
  const projectElement = document.createElement('div');
  projectElement.classList.add('project-card');

  projectElement.innerHTML = `
    <img src='${project.image}'>
    <h2>${project.titile}</h2>
    <p>${project.description}</p>
    <button class="openPopupBtn">${project.button}</button>
  `;
  projectContainer.appendChild(projectElement);

  // Add event listener to "See More" button
  projectElement.querySelector('.openPopupBtn').addEventListener('click', () => {
    openPopup(project.longDescription, project.titile, project.image, project.liveLink,
       project.sourceLink);
  });
});
// see more button on desktop version to see more project

const divs = document.getElementById('more-project-div');
var display = 1;

function hideShow1() {
  if (display === 0) {
    divs.style.display = 'none';
    display = 1;
  } else {
    divs.style.display = 'block';
    display = 0;
  }
}

// project section
const projectmData = [
  {
    image: 'image/form-p.png',
    titile: 'Form Register',
    description: 'The Telephone Validator project is designed to validate and standardize phone numbers, enhancing data integrity and usability for contact management.',
    button: 'See More',
    longDescription: 'The Cash Register project is a web-based application that automates the process of calculating the change to be returned to customers after a transaction. It ensures accurate calculations and provides a detailed breakdown of the change to be given, including denominations.The app uses JavaScript to perform calculations and manage transactions. CSS is used to style the user interface, providing a clean and modern look. The design is mobile-first, ensuring compatibility across a variety of devices.',
    technologys: ['HTML', 'CSS', 'Git', 'GitHub'],
    liveLink: '//breshnahamidi20.github.io/phone-number-validator-1/',
    sourceLink: '//github.com/Breshnahamidi20/phone-number-validator-1',
  },
  {
    image: 'image/palndroom-p.png',
    titile: 'Palindrome Checker',
    description: 'The Palindrome Checker is a web application that allows users to input a string and determine whether it reads the same forwards and backwards, identifying if it is a palindrome.',
    button: 'See More',
    longDescription: 'The Palindrome Checker is a web application designed to determine whether a given string is a palindrome. The app allows users to input a string and check if it reads the same forwards and backwards, ignoring spaces, punctuation, and capitalization.The app uses JavaScript to perform palindrome checks and handle string manipulations. CSS is used to style the user interface, providing a clean and modern look. The design is mobile-first, ensuring compatibility across a variety of devices.',
    liveLink: '//breshnahamidi20.github.io/palindrome-checker/',
    sourceLink: '//github.com/Breshnahamidi20/palindrome-checker',
  },
  {
    image: 'image/cash-p.png',
    titile: 'Cash Register',
    description: 'The Cash Register project is a web-based application that automates the process of calculating the change to be returned to customers.',
    button: 'See More',
    longDescription: 'The Roman Numeral Converter is a web application designed to convert numbers between Roman numerals and Arabic numerals. The app provides an easy-to-use interface for users to input a number and get its equivalent in Roman numerals, or vice versa.The app uses JavaScript to handle the conversion logic. CSS is used to style the user interface, providing a clean and modern look. The design is mobile-first, ensuring that the app works well on a variety of devices.',
    liveLink: '//breshnahamidi20.github.io/cash-register/',
    sourceLink: '//github.com/Breshnahamidi20/cash-register',
  },
];

const moreProject = document.getElementById('more-project');

// Function to create and show the popup
function openPopup3(longDescription, titile, image, liveLink, sourceLink ) {
  const popup = document.createElement('div');
  popup.classList.add('popup3');
  popup.innerHTML = `
    <div class='popup-content'>
    <h2>${titile}</h2>
    <img src='${image}'>
      <p>${longDescription}</p>
      <div class='popup-btn'> 
      <a href='${liveLink}'><button class='live-link'>Live Demo</button></a>
      <a href='${sourceLink}'><button class='source-link'>source code</button></a>
      </div>
    </div>
    <span class='close-popup' onclick='this.parentElement.remove()'>&times;</span>
  `;
  moreProject.appendChild(popup);
}

projectmData.forEach( (projectm) => {
  const projectElement = document.createElement('div');
  projectElement.classList.add('project-card');

  projectElement.innerHTML = `
    <img src='${projectm.image}'>
    <h2>${projectm.titile}</h2>
    <p>${projectm.description}</p>
    <button class="openPopupBtn1">${projectm.button}</button>
  `;
  moreProject.appendChild(projectElement);

  // Add event listener to "See More" button
  projectElement.querySelector('.openPopupBtn1').addEventListener('click', () => {
    openPopup3(projectm.longDescription, projectm.titile, projectm.image, projectm.liveLink,
      projectm.sourceLink);
  });
});

// js of form section
const form = document.getElementById('contactForm');
const errorText = document.getElementById('error');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value.toLowerCase();
  const message = document.getElementById('message').value;
  if (!name || !email || !message) {
    errorText.style.display = 'block';
    return;
  }

  const formData = { name, email, message };
  localStorage.setItem('formData', JSON.stringify(formData));

  // Here you can send the form data to Formspree service

  form.reset();
  errorText.style.display = 'none';
});

window.addEventListener('load', () => {
  const savedFormData = localStorage.getItem('formData');
  if (savedFormData) {
    const { name, email, message } = JSON.parse(savedFormData);
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('message').value = message;
  }
});
