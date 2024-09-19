// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cookieParser = require('cookie-parser');
// const cors = require('cors');
// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cookieParser());
// app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// const MONGO_URI = process.env.MONGO_URI;

// // Connect to MongoDB
// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection failed:', err));

// // Import and use auth routes
// const authRoutes = require('./routes/authRoutes');
// app.use('/api/auth', authRoutes);

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
