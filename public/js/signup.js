async function signUpHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value;
    const email = document.querySelector('#email-signup').value;
    const password = document.querySelector('#password-signup').value;
    
    const response = await fetch(`/api/user/signup`, {
      method: 'POST',
      body: JSON.stringify({
        username,
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
      // alert('Failed to add user');
      const test = await response.json();
      console.log(test)
    }
  }

document
    .querySelector('.signup-form')
    .addEventListener('submit', signUpHandler);