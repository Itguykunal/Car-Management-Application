const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/authenticate');
const {
  createCar,
  getUserCars,
  getCar,
  updateCar,
  deleteCar,
} = require('../controllers/carController');

// Route for creating a car (POST)
router.post('/create', authenticate, createCar);

// Route for getting all cars for the logged-in user (GET)
router.get('/', authenticate, getUserCars);

// Route for getting a specific car (GET by ID)
router.get('/:id', authenticate, getCar);

// Route for updating a car's details (PUT)
router.put('/:id', authenticate, updateCar);

// Route for deleting a car (DELETE)
router.delete('/:id', authenticate, deleteCar);

module.exports = router;
