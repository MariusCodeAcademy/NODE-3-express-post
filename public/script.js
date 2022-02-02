const getPosts = document.getElementById('get-posts');
const results = document.getElementById('results');
const URL = 'http://localhost:3000';

getPosts.addEventListener('click', () => {
  fetch(`${URL}/api/posts`)
    .then((response) => response.json())
    .then((data) => {
      if (data.message === 'success') {
        makeMePosts(data.data, results);
      }
    })
    .catch((err) => console.warn(err));
});

function makeMePosts(arr, destination) {
  const resultHTML = arr
    .map((post) => {
      return `
      <article>
        <h3>${post.title}</h3>
        <p>${post.text}</p>
      </article>
      `;
    })
    .join('');
  destination.innerHTML = resultHTML;
}
