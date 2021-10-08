async function loginHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value;
    const password = document.querySelector('#password-login').value;
    
    const response = await fetch(`/api/user/login`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in user');
    }
  }

document
    .querySelector('.login-form')
    .addEventListener('submit', loginHandler);