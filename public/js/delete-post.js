async function deletePostHandler() {
    const fetchID = window.location.pathname.split('/')[2]

    const response = await fetch(`/api/post/${fetchID}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete post');
      }
}

async function updatePostHandler() {
    const fetchID = window.location.pathname.split('/')[2]
    const title = document.querySelector('#update-title').value;
    const content = document.querySelector('#update-content').value;

    const response = await fetch(`/api/post/${fetchID}`, {
        method: 'PUT',
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
        alert('Failed to update post');
      }
}

document
    .querySelector('.delete-button')
    .addEventListener('click', deletePostHandler);

document
    .querySelector('.update-button')
    .addEventListener('click', updatePostHandler);