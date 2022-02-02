const getPosts = document.getElementById('get-posts');
const results = document.getElementById('results');
const createForm = document.getElementById('create-form');
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

// form
createForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const id = createForm.querySelector('input[name="id"]').value;
  const title = createForm.querySelector('input[name="title"]').value;
  const text = createForm.querySelector('textarea[name="text"]').value;

  const dataToSend = {
    id: id,
    title: title,
    text: text,
  };

  fetch(`${URL}/api/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToSend),
  })
    .then((resp) => resp.json())
    .then((dataBack) => console.log(dataBack))
    .catch((err) => console.warn(err));

  console.log('dataToSend ===', dataToSend);
});
