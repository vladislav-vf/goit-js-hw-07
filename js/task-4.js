const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const { email, password } = form.elements;
  const formData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  if (!formData.email || !formData.password) {
    alert('All form fields must be filled in');
    return;
  }

  console.log(formData);
  form.reset();
});

