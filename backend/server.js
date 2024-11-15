const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const carRoutes = require('./routes/carRoutes');

// Load environment variables from .env file
dotenv.config(); 

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB with enhanced options for better compatibility
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))  // Success message
  .catch((err) => console.log('MongoDB connection error:', err));  // Error handling

// Routes for handling user and car data
app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);

// Set up the server to listen on the specified port, default is 5001
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
