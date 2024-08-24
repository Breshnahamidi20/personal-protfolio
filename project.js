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
  
  const projectsContainer = document.getElementById('projects-continer');
  const projectsCard = document.getElementById('projects-card');
  
  
  // Function to create and show the popup
  function openPopup(longDescription, titile, image, liveLink, sourceLink) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
      <div class="popup-content">
      <h2>${titile}</h2>
      <img src=${image}>
        <p>${longDescription}</p>
        <div class='popup-btn'>
          <a href="${liveLink}"><button class="live-link">Live Demo</button></a>
          <a href="${sourceLink}"><button class="source-link">source code</button></a>
        </div>  
      </div>
      <span class="close-popup" onclick="this.parentElement.remove()">&times;</span>
    `;
    projectsContainer.appendChild(popup);
  }
  
  projectData.forEach((project) => {
    const projectsElement = document.createElement('div');
    projectsElement.classList.add('projects-card');
  
    projectsElement.innerHTML = `
      <img src="${project.image}">
      <h2>${project.titile}</h2>
      <p class="project-description">${project.description}</p>
      <button class="openPopupBtn">${project.button}</button>
    `;
    projectsContainer.appendChild(projectsElement);
  
    // Add event listener to "See More" button
    projectsElement.querySelector('.openPopupBtn').addEventListener('click', () => {
      openPopup(project.longDescription, project.titile, project.image,project.liveLink, project.sourceLink);
    });
  });
  