import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching car details for ID:", id);
    fetch(`/api/cars/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch car details');
        }
        return response.json();
      })
      .then(data => {
        console.log("Fetched data:", data);
        setCar(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="car-details">
      <h1>{car.name}</h1>
      <p>{car.description}</p>
      <p>Price: {car.price}</p>
      <button>Contact Seller</button>
    </div>
  );
}

export default CarDetails;
