const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the User schema
const userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true, 
    trim: true 
  },
  password: { 
    type: String, 
    required: true 
  }
}, { timestamps: true }); // Add timestamps for created and updated times

// Hash the password before saving the user to the database
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    try {
      // Hash password with salt rounds
      this.password = await bcrypt.hash(this.password, 10);
      next();
    } catch (err) {
      next(err); // Pass any errors to the next middleware
    }
  } else {
    next();
  }
});

// Method to compare the hashed password during login
userSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (err) {
    throw new Error('Error comparing password');
  }
};

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
