const form = document.getElementById('contactForms');
const errorMessage = document.getElementById('errorMessage');

// Load data from local storage
document.addEventListener('DOMContentLoaded', function() {
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
    document.getElementById('name').value = formData.name;
    document.getElementById('last-name').value = formData.lastname;
    document.getElementById('company-name').value = formData.companyname;
    document.getElementById('email').value = formData.email;
    document.getElementById('number').value = formData.number;
    document.getElementById('message').value = formData.message;
  }
});

// Save data to local storage when input changes
form.addEventListener('input', function() {
  const formData = {
    name: document.getElementById('name').value,
    lastname: document.getElementById('last-name').value,
    companyname: document.getElementById('company-name').value,
    email: document.getElementById('email').value.toLowerCase(),
    number: document.getElementById('number').value,
    message: document.getElementById('message').value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
});

// Form submit
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    lastname: document.getElementById('last-name').value,
    companyname: document.getElementById('company-name').value,
    email: document.getElementById('email').value.toLowerCase(),
    number: document.getElementById('number').value,
    message: document.getElementById('message').value,
  };

  if (formData.name && formData.lastname && formData.companyname && formData.email && formData.number && formData.message) {
    // Send form data using Formspree
    // Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual endpoint
    fetch('https://formspree.io/YOUR_FORMSPREE_ENDPOINT', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        // Form successfully sent
        localStorage.removeItem('formData'); // Clear local storage
        alert('Form submitted successfully!');
        form.reset();
      } else {
        errorMessage.style.display = 'block';
      }
    });
  } else {
    errorMessage.style.display = 'block';
  }
});