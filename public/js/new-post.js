async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#post_name').value;
    const content = document.querySelector('#content').value;
  
    const response = await fetch(`/`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add post');
    }
  }

  document
    .querySelector('.new-blog-post')
    .addEventListener('submit', newFormHandler);