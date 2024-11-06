const express = require('express');
const app = express();
const port = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js API!');
});

// Status route
app.get('/status', (req, res) => {
  res.json({ status: 'API is up and running' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
