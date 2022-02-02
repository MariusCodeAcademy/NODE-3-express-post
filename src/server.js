const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

const posts = [
  { id: 1, title: 'First post title', text: 'Text of First Post' },
  { id: 2, title: 'Second post title', text: 'Text of Second Post' },
  { id: 3, title: 'Thrid post title', text: 'Text of Thrid Post' },
];

// Middleware
app.use(cors());

// Routes
app.get('/test', (request, response) => {
  // vyks kodas kai nueisim i localhost:PORT/test
  response.send('<h2> Back end on line </h2>');
});

// GET /api/posts - returns all posts
// success api response {message: success, data: []}
// error {errr: 'error geting posts'}
app.get('/api/posts', (request, response) => {
  response.json({
    message: 'success',
    data: posts,
  });
});

// Server
app.listen(PORT, console.log(`Server is runnig on port ${PORT}`));
