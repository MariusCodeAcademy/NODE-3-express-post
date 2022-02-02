const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware

// Routes
app.get('/test', (request, response) => {
  // vyks kodas kai nueisim i localhost:PORT/test
  response.send('<h2> Back end on line </h2>');
});

// Server
app.listen(PORT, console.log(`Server is runnig on port ${PORT}`));
