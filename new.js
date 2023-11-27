const express = require('express');
const app = express();

// Middleware to log information about each incoming request
app.use((req, res, next) => {
  console.log([${new Date().toLocaleString()}] ${req.method} ${req.url});
  next();
});

// Route for the root path
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(The server is running on the port ${PORT}));
