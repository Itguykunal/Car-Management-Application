import React, { useEffect, useState } from 'react';
import { getCars, deleteCar } from '../services/api';

const CarList = ({ token }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch cars when the component is mounted
    const fetchCars = async () => {
      try {
        const carsData = await getCars(token);
        setCars(carsData);
      } catch (error) {
        console.error('Failed to fetch cars', error);
      }
    };
    fetchCars();
  }, [token]);

  const handleDelete = async (carId) => {
    try {
      await deleteCar(carId, token);
      setCars(cars.filter((car) => car._id !== carId));  // Remove deleted car from state
    } catch (error) {
      console.error('Failed to delete car', error);
    }
  };

  return (
    <div>
      <h2>Your Cars</h2>
      <ul>
        {cars.map((car) => (
          <li key={car._id}>
            <h3>{car.title}</h3>
            <p>{car.description}</p>
            <button onClick={() => handleDelete(car._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
