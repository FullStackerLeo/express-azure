const express = require('express');
const app = express(); // Creates an Express application

// Middleware (optional)
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.get('/', (req, res) => {res.send('Hello from my Express server!');});

// Error handling (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const port = process.env.PORT || 3000; // Use environment variable or default port
app.listen(port, () => {console.log(`Server listening on port ${port}`);});
