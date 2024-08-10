const hamMenu = document.querySelector('.ham-menu');
const mobileMenu = document.querySelector('.mobile-menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
      document.querySelector(".mobile-menu.active").classList.add('hidden');
      document.querySelector(".ham-menu.active span:nth-child(1)").classList.add('hidden');
      document.querySelector(".ham-menu.active span:nth-child(3)").classList.add('hidden');
  });
});


const div = document.getElementById('main-1');
const display = 0;

function hideShow()
{
    if(display === 1)
    {
        div.style.display = 'block';
        display = 0;
    }  else {
        div.style.display = 'none';
        display = 1;
    }
};



// Data for the response cards
const cardData = [
    {
      image: "image/repv-c.png",
      titile: "Responsive Web Design",
      description: "Description about Image 1 Description about Image 1 Description about Image 1 Description about Image 1 Description about Image 1 Description about Image 1 Description about Image 1",
      link: "https://www.example.com/image1"
    },
    {
      image: "image/repv-c.png",
      titile: "Responsive Web Design",
      description: "Description about Image 1 Description about Image 1 Description about Image 1 Description about Image 1 Description about Image 1 Description about Image 1 Description about Image 1",
      link: "https://www.example.com/image1"
    },
    {
      image: "image/repv-c.png",
      titile: "Responsive Web Design",
      description: "Description about Image 1 Description about Image 1 Description about Image 1 Description about Image 1 Description about Image 1 Description about Image 1 Description about Image 1",
      link: "https://www.example.com/image1"
    },
    
    
  ];
  
  // Container to hold the dynamically created cards
  const certificateContiner = document.getElementById("certificate-continer");

// Create response cards dynamically
cardData.forEach(card => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("response-card");

  cardElement.innerHTML = `
  
    <a href="${card.link}"><img src="${card.image}" alt="Image"></a>
    <h2>${card.titile}</h2>
    <p>${card.description}</p>
    
  `;

  certificateContiner.appendChild(cardElement);
});


const softSkillsData = [
  { skill: 'Team work', perDiv: '', percentage: '78%' },
  { skill: 'Clean code', perDiv: '', percentage: '87%' },
  { skill: 'Code review', perDiv: '' , percentage: '78%'},
  { skill: 'Time Management', perDiv: '', percentage:'78%' },
  { skill: 'Multi Tasking', perDiv: '', percentage: '78%' },
  { skill: 'Crisis Management', perDiv: '', percentage: '78%' }
];

const images = ['html-skill.png', 'css-skill.png', 'js-skill.png'];

const skillsContiner =document.getElementById("skills-continer");
const softSkillContainer = document.querySelector('.soft-skill');
const langSkillContainer = document.querySelector('.lang-skill');


images.forEach(image => {
    const img = document.createElement('img');
    img.src = `image/${image}`;
    langSkillContainer.appendChild(img);
    skillsContiner.appendChild(langSkillContainer);
});


softSkillsData.forEach(skillData => {
  const skillDiv = document.createElement('div');
  const skillSpan = document.createElement('span');
const skillperDiv = document.createElement('div');
const skillPercentage = document.createElement('div');

  skillSpan.textContent = skillData.skill;
  skillperDiv.textContent = skillData.perDiv;
  skillPercentage.textContent = skillData.percentage;
  
  skillDiv.appendChild(skillSpan);
  skillDiv.appendChild(skillperDiv);
  skillperDiv.appendChild(skillPercentage);
  

  softSkillContainer.appendChild(skillDiv);
  skillsContiner.appendChild(softSkillContainer);
});



// project popuo

const projectData = [
  {
    image:"image/covert-p.png",
    titile:"Cash Regsiter",
    description:"Description of the project one ... 0Description of the project one ... 0Description of the project one ... 0Description of the project one ... 0Description of the project one ... 0Description of the project one ... 0Description of the project one ... 0Description of the project one ... 0Description of the project one ... 0",
    button:"See More",
    longDescription: "Description of the project one ... 0",
    technologys: ["HTML", "CSS", "Git", "GitHub"],
    liveLink: "#",
    sourceLink: "#",
  },

  {
    image:"image/pokemo-p.png",
    titile:"Pokemon",
    description:"",
    button:"See More",
    longDescription: "Description of the project one ... 1",
    technologys: ["HTML", "CSS", "Git", "GitHub"],
    liveLink: "https://breshnahamidi20.github.io/pokemon/",
    sourceLink: "https://github.com/Breshnahamidi20/pokemon",
  },
  
  {
    image:"image/number-p.png",
    titile:"PalandRoom",
    description:"",
    button:"See More",
    longDescription: "Description of the project one ... 3",
    technologys: ["HTML", "CSS", "Git", "GitHub"],
    liveLink: "#",
    sourceLink: "#",
    
  },
  
  
];

const projectContainer = document.getElementById('project-continer');
const projectCard = document.getElementById('project-card');

projectContainer.innerHTML=`
`
;

// Function to create and show the popup
function openPopup(longDescription, titile, technologys, liveLink, sourceLink ) {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `
    <div class="popup-content">
    <h2>${titile}</h2>
      <p>${longDescription}</p>
      <p>${technologys}</p>
      <a href="${liveLink}"><button class="live-link">Live Demo</button></a>
      <a href="${sourceLink}"><button class="source-link">source code</button></a>
    </div>
    <span class="close-popup" onclick="this.parentElement.remove()">&times;</span>
  `;
  projectContainer.appendChild(popup);
}

projectData.forEach(project => {
  const projectElement = document.createElement("div");
  projectElement.classList.add("project-card");

  projectElement.innerHTML = `
    <img src="${project.image}">
    <h2>${project.titile}</h2>
    <p>${project.description}</p>
    <button class="openPopupBtn">${project.button}</button>
  `;
  projectContainer.appendChild(projectElement);

  // Add event listener to "See More" button
  projectElement.querySelector(".openPopupBtn").addEventListener("click", () => {
    openPopup(project.longDescription, project.titile, project.technologys,project.liveLink, project.sourceLink);
  });
});


const form = document.getElementById('contactForm');
const errorText = document.getElementById('error');

form.addEventListener('submit', function(event) {
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

window.addEventListener('load', function() {
  const savedFormData = localStorage.getItem('formData');
  if (savedFormData) {
    const { name, email, message } = JSON.parse(savedFormData);
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('message').value = message;
  }
});
