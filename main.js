const express = require('express');
const app = express();

// Middleware to log information about each incoming request
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

// Route for the root path
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Dynamic route for personalized greeting
app.get('/greet/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}! Welcome to the Express.js app.`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`The server is running on the port ${PORT}`));
