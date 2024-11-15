import axios from 'axios';

// Set base URL for API
const API = axios.create({
  baseURL: 'http://localhost:5001', // Base URL for all API requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to log in a user
export const loginUser = async ({ email, password }) => {
  try {
    const response = await API.post('/api/users/login', { email, password }); // Backend login endpoint
    return response.data; // Return the login response (usually includes token/user data)
  } catch (error) {
    console.error('Error logging in:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Function to register a new user
export const signupUser = async ({ email, password }) => { // Ensure this function is exported
  try {
    const response = await API.post('/api/users/signup', { email, password }); // Backend signup endpoint
    return response.data; // Return the signup response (usually success message)
  } catch (error) {
    console.error('Error during signup:', error.response ? error.response.data : error);
    throw error;
  }
};

// Function to get all cars (example of another API call)
export const getCars = async (token) => {
  try {
    const response = await API.get('/api/cars', { // Example endpoint for cars
      headers: {
        Authorization: `Bearer ${token}`, // Include JWT token in request headers
      },
    });
    return response.data; // Return the data (list of cars)
  } catch (error) {
    console.error('Error fetching cars:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Function to create a new car
export const createCar = async (carData, token) => {
  try {
    const response = await API.post('/api/cars/create', carData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating car:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Function to update a car
export const updateCar = async (carId, carData, token) => {
  try {
    const response = await API.put(`/api/cars/${carId}`, carData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating car:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Function to delete a car
export const deleteCar = async (carId, token) => {
  try {
    const response = await API.delete(`/api/cars/${carId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting car:', error.response ? error.response.data : error.message);
    throw error;
  }
};
