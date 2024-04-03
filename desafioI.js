async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      console.log(respuesta.status);
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function getPosts() {
  try {
    const posts = await fetchPosts();
    const postDataDiv = document.getElementById('post-data');
    postDataDiv.innerHTML = '';
    const ul = document.createElement('ul');
    posts.forEach(post => {
      const li = document.createElement('li');
      const title = document.createElement('h2');
      const body = document.createElement('p');
      title.textContent = post.title;
      body.textContent = post.body;
      li.appendChild(title);
      li.appendChild(body);
      ul.appendChild(li);
    });
    postDataDiv.appendChild(ul);
  } catch (error) {
    console.error('Error al mostrar posts:', error);
  }
}
