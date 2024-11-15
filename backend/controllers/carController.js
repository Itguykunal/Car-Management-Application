const Car = require('../models/Car');

// Create a new car
const createCar = async (req, res) => {
  const { title, description, tags, images } = req.body;

  try {
    // Create a new car object and save it to the database
    const newCar = new Car({
      userId: req.user._id,  // Use req.user._id for the user
      title,
      description,
      tags,
      images,
    });

    await newCar.save(); // Save the new car
    res.status(201).json(newCar); // Send the created car as response
  } catch (err) {
    res.status(500).json({ message: err.message }); // Handle errors
  }
};

// Get all cars for the logged-in user
const getUserCars = async (req, res) => {
  try {
    // Fetch all cars for the logged-in user using req.user._id
    const cars = await Car.find({ userId: req.user._id });
    res.status(200).json(cars); // Respond with the list of cars
  } catch (err) {
    res.status(500).json({ message: err.message }); // Handle errors
  }
};

// Get a specific car by ID
const getCar = async (req, res) => {
  try {
    // Find a car by its ID
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' }); // Handle car not found
    }
    res.status(200).json(car); // Respond with the car details
  } catch (err) {
    res.status(500).json({ message: err.message }); // Handle errors
  }
};

// Update a car's details
const updateCar = async (req, res) => {
  const { title, description, tags, images } = req.body;

  try {
    // Find and update the car by ID
    const updatedCar = await Car.findByIdAndUpdate(
      req.params.id,
      { title, description, tags, images },
      { new: true } // Return the updated car
    );
    if (!updatedCar) {
      return res.status(404).json({ message: 'Car not found' }); // Handle car not found
    }
    res.status(200).json(updatedCar); // Respond with the updated car
  } catch (err) {
    res.status(500).json({ message: err.message }); // Handle errors
  }
};

// Delete a car
const deleteCar = async (req, res) => {
  try {
    // Find and delete the car by ID
    const deletedCar = await Car.findByIdAndDelete(req.params.id);
    if (!deletedCar) {
      return res.status(404).json({ message: 'Car not found' }); // Handle car not found
    }
    res.status(200).json({ message: 'Car deleted successfully' }); // Respond with success message
  } catch (err) {
    res.status(500).json({ message: err.message }); // Handle errors
  }
};

module.exports = { createCar, getUserCars, getCar, updateCar, deleteCar };
