const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

// Ensure the path to your routes file is correct
const apiService = require('./src/Services/api'); // Adjust path as necessary

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Frontend server URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Allows credentials (cookies) to be sent
}));
app.use(express.json()); // Parse JSON request bodies

// API Routes
app.use('/api', apiService); // Set the API routes to be accessed via /api

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
