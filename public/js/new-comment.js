async function newCommentHandler(event) {
    event.preventDefault();
  
    const comment_entry = document.querySelector('#comment').value;
    const post_id = window.location.pathname.split('/')[2]
  
    const response = await fetch(`/api/post/${post_id}`, {
      method: 'POST',
      body: JSON.stringify({
        comment_entry,
        post_id
      }),
      headers: {
        'Content-Type': 'application/json',
      },

    });
  
    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
      console.log('succeed to add post')
    } else {
      alert('Failed to add post');
    }
  }

  document
    .querySelector('.new-comment')
    .addEventListener('submit', newCommentHandler);